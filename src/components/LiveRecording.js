import { useState, useRef } from 'react';
import styles from '@/styles/components/LiveRecording.module.css';
import { BsMicFill, BsMicMuteFill, BsStopFill, BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LiveRecording({ onRecordingComplete }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const startTime = useRef(null);
  const timer = useRef(null);
  const { translations } = useLanguage();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        onRecordingComplete(audioBlob);
      };

      mediaRecorder.current.start();
      startTime.current = Date.now();
      setIsRecording(true);
      
      // Start duration timer
      timer.current = setInterval(() => {
        setDuration(Math.floor((Date.now() - startTime.current) / 1000));
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
      clearInterval(timer.current);
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const togglePause = () => {
    if (isRecording) {
      if (isPaused) {
        mediaRecorder.current.resume();
      } else {
        mediaRecorder.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    // Here you could implement actual volume control
  };

  return (
    <div className={styles.recordingContainer}>
      <div className={styles.controls}>
        {!isRecording && !audioURL ? (
          <button 
            className={styles.startButton}
            onClick={startRecording}
            title={translations.recording.start}
          >
            <BsMicFill size={24} />
            <span>{translations.recording.start}</span>
          </button>
        ) : (
          <div className={styles.activeControls}>
            <button
              className={`${styles.controlButton} ${isPaused ? styles.muted : ''}`}
              onClick={togglePause}
              title={isPaused ? translations.recording.resume : translations.recording.pause}
            >
              {isPaused ? <BsMicMuteFill size={20} /> : <BsMicFill size={20} />}
            </button>
            <div className={styles.volumeControl}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className={styles.volumeSlider}
              />
            </div>
            <button
              className={`${styles.controlButton} ${styles.stopButton}`}
              onClick={stopRecording}
              title={translations.recording.stop}
            >
              <BsStopFill size={20} />
            </button>
          </div>
        )}
      </div>

      {isRecording && (
        <div className={styles.recordingInfo}>
          <div className={styles.recordingIndicator}>
            <span className={styles.dot} />
            {translations.recording.recording}
          </div>
          <div className={styles.duration}>{formatTime(duration)}</div>
        </div>
      )}

      {audioURL && (
        <div className={styles.playback}>
          <audio src={audioURL} controls className={styles.audioPlayer} />
          <button 
            className={styles.newRecordingButton}
            onClick={() => {
              setAudioURL(null);
              setDuration(0);
            }}
          >
            {translations.recording.new}
          </button>
        </div>
      )}
    </div>
  );
} 