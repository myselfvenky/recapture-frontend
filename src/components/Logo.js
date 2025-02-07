import Link from 'next/link';
import styles from '@/styles/components/Logo.module.css';
import Image from 'next/image';
import logo from "@/Assets/Logo/logo.svg"

export default function Logo({ variant = 'default' }) {
  return (
    <Link href="/" className={`${styles.logoContainer} ${styles[variant]}`}>
      <div className={styles.logoWrapper}>
        <Image src={logo}alt="Recapture Logo" width={32} height={32} />
        <h1 className={styles.logoText}>Recapture</h1>
      </div>
      <div className={styles.glowEffect} />
      <div className={styles.shineEffect} />
    </Link>
  );
} 