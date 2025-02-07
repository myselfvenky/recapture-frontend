import { useState } from 'react';
import styles from '@/styles/components/SalesIntegration.module.css';
import { 
  BsGraphUp, 
  BsPeople, 
  BsCheckCircle, 
  BsExclamationTriangle,
  BsBarChart,
  BsChatQuote
} from 'react-icons/bs';

export default function SalesIntegration({ callData }) {
  const [activeTab, setActiveTab] = useState('insights');

  const metrics = {
    leadScore: 85,
    sentiment: 'Positive',
    interests: ['Enterprise Plan', 'API Integration', 'Custom Reporting'],
    painPoints: ['Current solution is slow', 'Lack of analytics', 'Price concerns'],
    nextSteps: ['Send pricing proposal', 'Schedule technical demo', 'Follow up in 2 days'],
    competitors: ['Competitor A', 'Competitor B']
  };

  return (
    <div className={styles.salesContainer}>
      <div className={styles.tabButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === 'insights' ? styles.active : ''}`}
          onClick={() => setActiveTab('insights')}
        >
          <BsGraphUp />
          Sales Insights
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'sentiment' ? styles.active : ''}`}
          onClick={() => setActiveTab('sentiment')}
        >
          <BsBarChart />
          Sentiment Analysis
        </button>
      </div>

      {activeTab === 'insights' ? (
        <div className={styles.insightsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <BsPeople />
              <h3>Lead Score</h3>
            </div>
            <div className={styles.scoreCircle} style={{ 
              background: `conic-gradient(rgba(143, 98, 211, 0.8) ${metrics.leadScore}%, 
                          rgba(255, 255, 255, 0.1) ${metrics.leadScore}%)`
            }}>
              {metrics.leadScore}%
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <BsCheckCircle />
              <h3>Product Interest</h3>
            </div>
            <ul className={styles.interestList}>
              {metrics.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <BsExclamationTriangle />
              <h3>Pain Points</h3>
            </div>
            <ul className={styles.painPointsList}>
              {metrics.painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <BsChatQuote />
              <h3>Competitive Mentions</h3>
            </div>
            <div className={styles.competitorTags}>
              {metrics.competitors.map((competitor, index) => (
                <span key={index} className={styles.competitorTag}>
                  {competitor}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.sentimentAnalysis}>
          <div className={styles.sentimentTimeline}>
            {/* Add sentiment timeline visualization here */}
          </div>
          <div className={styles.keyMoments}>
            <h3>Key Moments</h3>
            <ul>
              <li>
                <span className={styles.timestamp}>02:15</span>
                <span className={styles.positive}>Strong interest in pricing</span>
              </li>
              <li>
                <span className={styles.timestamp}>05:30</span>
                <span className={styles.neutral}>Technical questions</span>
              </li>
              <li>
                <span className={styles.timestamp}>08:45</span>
                <span className={styles.negative}>Competitor comparison</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={styles.actionItems}>
        <h3>Next Steps</h3>
        <ul className={styles.actionList}>
          {metrics.nextSteps.map((step, index) => (
            <li key={index}>
              <input type="checkbox" id={`step-${index}`} />
              <label htmlFor={`step-${index}`}>{step}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 