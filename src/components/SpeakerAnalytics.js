import { useState } from 'react';
import styles from '@/styles/components/SpeakerAnalytics.module.css';

export default function SpeakerAnalytics({ speakers }) {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === 'timeline' ? styles.active : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          Timeline
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'contributions' ? styles.active : ''}`}
          onClick={() => setActiveTab('contributions')}
        >
          Contributions
        </button>
      </div>

      {activeTab === 'timeline' ? (
        <div className={styles.timeline}>
          {speakers.map((speaker, index) => (
            <div key={index} className={styles.timelineRow}>
              <div className={styles.speakerInfo}>
                <div 
                  className={styles.speakerAvatar}
                  style={{ backgroundColor: speaker.color }}
                >
                  {speaker.name[0]}
                </div>
                <span>{speaker.name}</span>
              </div>
              <div className={styles.timelineBar}>
                {speaker.segments.map((segment, idx) => (
                  <div
                    key={idx}
                    className={styles.segment}
                    style={{
                      left: `${segment.start}%`,
                      width: `${segment.duration}%`,
                      backgroundColor: speaker.color
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.contributions}>
          {speakers.map((speaker, index) => (
            <div key={index} className={styles.contributionBar}>
              <div className={styles.speakerInfo}>
                <div 
                  className={styles.speakerAvatar}
                  style={{ backgroundColor: speaker.color }}
                >
                  {speaker.name[0]}
                </div>
                <span>{speaker.name}</span>
              </div>
              <div className={styles.barContainer}>
                <div 
                  className={styles.bar}
                  style={{ 
                    width: `${speaker.contribution}%`,
                    backgroundColor: speaker.color
                  }}
                />
                <span className={styles.percentage}>{speaker.contribution}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 