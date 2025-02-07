import { useState, useCallback } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import styles from "@/styles/pages/recapture.module.css";
import { BsUpload, BsClockHistory, BsClock } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import SpeakerAnalytics from '@/components/SpeakerAnalytics';
import ExportOptions from '@/components/ExportOptions';
import LiveRecording from '@/components/LiveRecording';
import SalesIntegration from '@/components/SalesIntegration';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Recapture() {
  const [audioFile, setAudioFile] = useState(null);
  const [minutes, setMinutes] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [lastGenerations, setLastGenerations] = useState([
    {
      id: 1,
      title: "Weekly Team Sync",
      date: "2024-03-01",
      duration: "32 mins",
      preview: "Discussion on Q1 goals and project timeline..."
    },
    {
      id: 2,
      title: "Product Review",
      date: "2024-02-28",
      duration: "45 mins",
      preview: "New feature prioritization and roadmap planning..."
    },
    {
      id: 3,
      title: "Design Sprint",
      date: "2024-02-27",
      duration: "60 mins",
      preview: "UI/UX improvements for mobile application..."
    }
  ]);
  const [speakers, setSpeakers] = useState([
    {
      name: "John Smith",
      color: "rgba(143, 98, 211, 0.8)",
      segments: [
        { start: 0, duration: 20 },
        { start: 45, duration: 15 },
        { start: 80, duration: 10 }
      ],
      contribution: 35
    },
    {
      name: "Sarah Johnson",
      color: "rgba(98, 211, 143, 0.8)",
      segments: [
        { start: 25, duration: 15 },
        { start: 65, duration: 10 }
      ],
      contribution: 25
    },
    // Add more speakers as needed
  ]);
  const { translations, setDetectedLang } = useLanguage();
  const [recordingMode, setRecordingMode] = useState('upload'); // 'upload' or 'live'
  const [isSalesCall, setIsSalesCall] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
    } else {
      alert('Please select an audio file');
    }
  };

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
    } else {
      alert('Please drop an audio file');
    }
  }, []);

  const simulateProgress = () => {
    setProgress(0);
    setProgressStatus(translations.progress.transcribing);
    
    const steps = [
      { progress: 25, status: translations.progress.analyzing },
      { progress: 50, status: translations.progress.identifying },
      { progress: 75, status: translations.progress.generating },
      { progress: 100, status: translations.progress.finalizing }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].progress);
        setProgressStatus(steps[currentStep].status);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return interval;
  };

  const handleUpload = async () => {
    if (!audioFile) {
      alert('Please select an audio file first');
      return;
    }

    setLoading(true);
    const progressInterval = simulateProgress();

    try {
      // Simulate language detection
      const detectLanguage = async () => {
        // Here you would implement actual language detection
        const detectedLanguage = 'es'; // Example
        setDetectedLang(detectedLanguage);
        return detectedLanguage;
      };

      const detectedLang = await detectLanguage();
      console.log('Detected language:', detectedLang);

      await new Promise(resolve => setTimeout(resolve, 5000));
      setMinutes(`Recapture Meeting Summary
Generated on: ${new Date().toLocaleDateString()}
Meeting Duration: 45 minutes

🎯 Meeting Overview
A product development sync discussing timeline adjustments and resource allocation.

👥 Participants
• Sarah Johnson (Lead Product Manager)
• Mike Chen (Senior Developer)
• Lisa Rodriguez (UX Designer)
• John Smith (Product Owner)

📋 Key Discussion Points

1. Sprint Progress
   ✓ Current sprint tracking at 80% completion
   ✓ Frontend milestones exceeded expectations
   ⚠️ Backend integration requires additional support

2. Strategic Decisions
   • Launch date extended by 2 weeks for quality assurance
   • Additional QA resource approved
   • New cloud infrastructure provider selected

3. Team Assignments
   @Mike: API documentation completion (Due: Friday)
   @Lisa: Design mockups revision (Due: Wednesday)
   @Sarah: Security audit coordination (Next week)
   @John: Phase 2 requirements finalization`);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      clearInterval(progressInterval);
      setLoading(false);
      setProgress(0);
      setProgressStatus('');
    }
  };

  const handleExport = async ({ format, options }) => {
    // Here you would implement the actual export logic
    console.log('Exporting as:', format, 'with options:', options);
    // Example: call your API to generate and download the file
  };

  const handleRecordingComplete = (audioBlob) => {
    setAudioFile(new File([audioBlob], 'recording.wav', { type: 'audio/wav' }));
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.uploadSection}>
            <div className={styles.uploadCard}>
              <div className={styles.modeSelector}>
                <button
                  className={`${styles.modeButton} ${recordingMode === 'upload' ? styles.active : ''}`}
                  onClick={() => setRecordingMode('upload')}
                >
                  {translations.modes.upload}
                </button>
                <button
                  className={`${styles.modeButton} ${recordingMode === 'live' ? styles.active : ''}`}
                  onClick={() => setRecordingMode('live')}
                >
                  {translations.modes.live}
                </button>
              </div>

              {recordingMode === 'upload' ? (
                <>
                  <div className={styles.uploadHeader}>
                    <BsUpload size={24} />
                    <h2>{translations.upload.title}</h2>
                  </div>
                  
                  <div 
                    className={`${styles.uploadArea} ${isDragging ? styles.dragging : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleFileChange}
                      className={styles.fileInput}
                      id="audioFile"
                    />
                    <label htmlFor="audioFile" className={styles.uploadLabel}>
                      {audioFile ? (
                        <span className={styles.fileName}>{audioFile.name}</span>
                      ) : (
                        <>
                          <BsUpload size={32} className={styles.uploadIcon} />
                          <span className={styles.uploadText}>
                            {translations.upload.dragDrop}
                          </span>
                          <span className={styles.uploadSubtext}>
                            {translations.upload.supports}
                          </span>
                        </>
                      )}
                    </label>
                  </div>

                  <button 
                    onClick={handleUpload}
                    className={styles.generateButton}
                    disabled={loading || !audioFile}
                  >
                    {loading ? (
                      <>
                        <div className={styles.spinner} />
                        {translations.upload.generating}
                      </>
                    ) : (
                      <>
                        <FiCheck />
                        {translations.upload.generate}
                      </>
                    )}
                  </button>

                  {loading && (
                    <div className={styles.progressContainer}>
                      <div className={styles.progressStatus}>
                        {progressStatus}
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className={styles.progressPercentage}>
                        {progress}%
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <LiveRecording onRecordingComplete={handleRecordingComplete} />
              )}
            </div>
          </div>

          <div className={styles.outputSection}>
            {minutes ? (
              <div className={styles.minutesCard}>
                <div className={styles.minutesHeader}>
                  <h2>Generated Minutes</h2>
                  <label className={styles.salesToggle}>
                    <input
                      type="checkbox"
                      checked={isSalesCall}
                      onChange={(e) => setIsSalesCall(e.target.checked)}
                    />
                    Sales Call Analysis
                  </label>
                </div>
                <SpeakerAnalytics speakers={speakers} />
                {isSalesCall && <SalesIntegration />}
                <ExportOptions onExport={handleExport} />
                <pre className={styles.minutesContent}>
                  {minutes}
                </pre>
              </div>
            ) : (
              <div className={styles.historySection}>
                <div className={styles.historyHeader}>
                  <BsClockHistory size={20} />
                  <h2>Recent Meetings</h2>
                </div>
                <div className={styles.historyGrid}>
                  {lastGenerations.map((meeting) => (
                    <div key={meeting.id} className={styles.meetingCard}>
                      <div className={styles.meetingHeader}>
                        <h3>{meeting.title}</h3>
                        <span className={styles.meetingDate}>{meeting.date}</span>
                      </div>
                      <div className={styles.meetingDetails}>
                        <span className={styles.duration}>
                          <BsClock />
                          {meeting.duration}
                        </span>
                        <p>{meeting.preview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 