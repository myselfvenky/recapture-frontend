import MainLayout from '@/components/Layout/MainLayout';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for trying out Recapture',
      features: [
        '10 meetings per month',
        'Basic transcription',
        'Export to text',
        'Email support'
      ],
      cta: 'Get Started',
      href: '/signup',
      popular: false
    },
    {
      name: 'Pro',
      price: '29',
      description: 'Ideal for individuals and small teams',
      features: [
        'Unlimited meetings',
        'Advanced AI transcription',
        'Custom templates',
        'Export to multiple formats',
        'Priority support',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      href: '/signup?plan=pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations with custom needs',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'Advanced analytics',
        'API access',
        'SSO integration',
        'Dedicated support',
        'Custom contracts'
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ];

  return (
    <MainLayout>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingHeader}>
          <h1>Simple, transparent pricing</h1>
          <p>Choose the perfect plan for your needs</p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popularPlan : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <div className={styles.planHeader}>
                <h2>{plan.name}</h2>
                <div className={styles.planPrice}>
                  {plan.price !== 'Custom' && <span className={styles.currency}>$</span>}
                  {plan.price}
                  {plan.price !== 'Custom' && <span className={styles.period}>/mo</span>}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className={`${styles.planCTA} ${plan.popular ? styles.popularCTA : ''}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.pricingFAQ}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Can I change plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is there a free trial?</h3>
              <p>Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What happens if I exceed my limit?</h3>
              <p>We&apos;ll notify you when you&apos;re close to your limit. You can upgrade your plan at any time to continue using the service.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 