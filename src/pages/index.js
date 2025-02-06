import { useState, useCallback } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import styles from "../styles/Home.module.css";
import { BsUpload, BsClockHistory, BsClock } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [minutes, setMinutes] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
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

  const handleUpload = async () => {
    if (!audioFile) {
      alert('Please select an audio file first');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
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
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <h1>Transform Your Meetings into Clear, Actionable Minutes</h1>
          <p>Upload your meeting recording and let AI do the work</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.uploadSection}>
            <div className={styles.uploadCard}>
              <div className={styles.uploadHeader}>
                <BsUpload size={24} />
                <h2>Upload Recording</h2>
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
                        Drag & drop your audio file here or click to browse
                      </span>
                      <span className={styles.uploadSubtext}>
                        Supports MP3, WAV, M4A files
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
                    Generating...
                  </>
                ) : (
                  <>
                    <FiCheck />
                    Generate Minutes
                  </>
                )}
              </button>
            </div>
          </div>

          <div className={styles.outputSection}>
            {minutes ? (
              <div className={styles.minutesCard}>
                <div className={styles.minutesHeader}>
                  <h2>Generated Minutes</h2>
                  <button className={styles.copyButton}>Copy</button>
                </div>
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
