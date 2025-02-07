import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { BsTwitterX, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import Logo from '../Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Documentation', href: '/about' },
      { name: 'API Reference', href: '/api' }
    ],
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/recapture', icon: <BsTwitterX /> },
      { name: 'GitHub', href: 'https://github.com/recapture', icon: <BsGithub /> },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/recapture', icon: <BsLinkedin /> },
      { name: 'Discord', href: 'https://discord.gg/recapture', icon: <BsDiscord /> }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Logo variant="footer" />
          <p className={styles.footerTagline}>
            Transform your meetings into actionable insights with AI-powered minutes
          </p>
          {/* <div className={styles.socialLinks}>
            {footerLinks.social.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span>{link.icon}</span>
              </Link>
            ))}
          </div> */}
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerSection}>
            <h3>Product</h3>
            {footerLinks.product.map((link, index) => (
              <Link key={index} href={link.href} className={styles.footerLink}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.footerSection}>
            <h3>Company</h3>
            {footerLinks.company.map((link, index) => (
              <Link key={index} href={link.href} className={styles.footerLink}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.footerSection}>
            <h3>Legal</h3>
            {footerLinks.legal.map((link, index) => (
              <Link key={index} href={link.href} className={styles.footerLink}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {currentYear} Recapture. All rights reserved.</p>
      </div>
    </footer>
  );
} 