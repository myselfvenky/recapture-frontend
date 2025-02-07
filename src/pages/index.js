import {  useEffect } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import styles from "../styles/Home.module.css";
import {  BsArrowRight, BsCloudUpload, BsCameraVideo, BsMic, BsGraphUp, BsBarChart, BsExclamationTriangle } from 'react-icons/bs';
import { 
  AiOutlineAudio, 
  AiOutlineRobot, 
  AiOutlineFile, 
  AiOutlineGlobal, 
  AiOutlineTeam,
  AiOutlineExport,
  AiOutlineDollar
} from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {



  const features = [
    {
      icon: <AiOutlineAudio size={24} />,
      title: "Universal Meeting Support",
      description: "Works with uploaded recordings, live online meetings, and physical meetings via room mics."
    },
    {
      icon: <AiOutlineDollar size={24} />,
      title: "Sales Intelligence",
      description: "Transform sales calls into actionable insights with real-time analysis and CRM integration."
    },
    {
      icon: <AiOutlineTeam size={24} />,
      title: "Smart Speaker Recognition",
      description: "Automatically identify and label speakers with custom voice profiles and analytics."
    },
    {
      icon: <AiOutlineGlobal size={24} />,
      title: "Multi-Language Support",
      description: "Transcribe and generate minutes in 30+ languages with automatic detection."
    },
    {
      icon: <AiOutlineRobot size={24} />,
      title: "AI-Powered Analysis",
      description: "Advanced AI models identify speakers, key topics, and action items automatically."
    },
    {
      icon: <AiOutlineExport size={24} />,
      title: "Flexible Export Options",
      description: "Export minutes in multiple formats with custom branding and analytics included."
    },
    {
      icon: <AiOutlineFile size={24} />,
      title: "Smart Summaries",
      description: "Get concise, well-structured minutes with key points and decisions highlighted."
    }
  ];

  const howItWorks = [
    {
      number: "1",
      title: "Connect Your Meeting",
      description: "Upload a recording, join online meetings, or connect room microphones"
    },
    {
      number: "2",
      title: "AI Processing",
      description: "Our AI transcribes and analyzes in real-time"
    },
    {
      number: "3",
      title: "Get Minutes",
      description: "Receive well-structured, actionable meeting minutes"
    }
  ];

  const testimonials = [
    {
      quote: "Recapture has transformed how we document our meetings. It's like having a professional secretary.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp"
    },
    {
      quote: "The accuracy and organization of the AI-generated minutes is impressive. Saves hours of work.",
      author: "Michael Chen",
      role: "Engineering Lead at StartupX"
    },
    {
      quote: "Game-changer for our remote team. No more scrambling to remember what was discussed.",
      author: "Lisa Rodriguez",
      role: "CEO at DesignLab"
    },
    {
      quote: "The ability to capture both online and in-person meetings has made this indispensable for our hybrid workplace.",
      author: "David Park",
      role: "Operations Director at FlexWork"
    },
    {
      quote: "The ability to transcribe our international meetings in multiple languages has been game-changing.",
      author: "Sophie Laurent",
      role: "Global Communications Director"
    }
  ];

  const salesFeatures = [
    {
      title: "Lead Scoring",
      description: "Automatically qualify leads based on conversation analysis",
      icon: <BsGraphUp size={32} />
    },
    {
      title: "Sentiment Analysis",
      description: "Track customer sentiment throughout the call",
      icon: <BsBarChart size={32} />
    },
    {
      title: "Pain Point Detection",
      description: "Identify and categorize customer pain points",
      icon: <BsExclamationTriangle size={32} />
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles['animate-on-scroll']}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <MainLayout>
      <div className={styles.homeContainer}>
        <section className={styles.heroSection}>
          <h1>Transform Your Meetings into Clear, Actionable Minutes</h1>
          <p>Upload your meeting recording and let AI do the work</p>
          <div className={styles.heroButtons}>
            <Link href="/recapture" className={styles.primaryButton}>
              Try Now
              <BsArrowRight />
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              View Documentation
            </Link>
          </div>
        </section>

        <div className={styles.mainContent}>
          <section className={`${styles.featuresSection} ${styles['animate-on-scroll']}`}>
            <h2>Why Choose Recapture?</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={styles.featureCard}
                  style={{ 
                    animationDelay: `${index * 0.2}s` // Add staggered animation
                  }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.howItWorksSection} ${styles['animate-on-scroll']}`}>
            <h2>How It Works</h2>
            <div className={styles.stepsGrid}>
              {howItWorks.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.integrationSection} ${styles['animate-on-scroll']}`}>
            <h2>Seamless Meeting Integration</h2>
            <div className={styles.integrationGrid}>
              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <BsCloudUpload size={32} />
                </div>
                <h3>Upload Recordings</h3>
                <p>Upload existing meeting recordings in MP3, WAV, or M4A format</p>
              </div>
              
              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <BsCameraVideo size={32} />
                </div>
                <h3>Online Meetings</h3>
                <p>Direct integration with Zoom, Microsoft Teams, and Google Meet</p>
              </div>
              
              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <BsMic size={32} />
                </div>
                <h3>Physical Meetings</h3>
                <p>Connect to room microphones and capture in-person discussions</p>
              </div>
            </div>
          </section>

          <section className={`${styles.testimonialsSection} ${styles['animate-on-scroll']}`}>
            <h2>What Our Users Say</h2>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      {testimonial.author[0]}
                    </div>
                    <div className={styles.authorInfo}>
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className={`${styles.salesSection} ${styles['animate-on-scroll']}`}>
            <h2>Supercharge Your Sales Calls</h2>
            <p className={styles.salesSubtitle}>
              Turn every sales conversation into actionable intelligence
            </p>
            
            <div className={styles.salesGrid}>
              {salesFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={styles.salesCard}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.salesIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.salesDemo}>
              <div className={styles.demoMetrics}>
                <div className={styles.metric}>
                  <h4>Average Lead Score</h4>
                  <div className={styles.scoreCircle}>85%</div>
                </div>
                <div className={styles.metric}>
                  <h4>Conversion Rate</h4>
                  <div className={styles.scoreCircle}>32%</div>
                </div>
                <div className={styles.metric}>
                  <h4>Customer Sentiment</h4>
                  <div className={styles.sentimentBar}>
                    <div className={styles.positive} style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className={`${styles.ctaSection} ${styles['animate-on-scroll']}`}>
            <h2>Ready to Transform Your Meetings?</h2>
            <p>Join thousands of teams saving time with Recapture</p>
            <div className={styles.ctaButtons}>
              <Link href="/recapture" className={styles.primaryButton}>
                Try Now Free
                <BsArrowRight />
              </Link>
              <Link href="/pricing" className={styles.secondaryButton}>
                View Pricing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
