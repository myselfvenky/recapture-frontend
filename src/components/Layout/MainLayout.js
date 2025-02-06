import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '@/styles/Home.module.css';

export default function MainLayout({ children }) {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 