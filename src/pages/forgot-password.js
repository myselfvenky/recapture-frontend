import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/Layout/MainLayout';
import styles from '@/styles/Home.module.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsEmailSent(true);
      // Add your actual password reset logic here
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <h1>Reset Password</h1>
            <p>Enter your email to receive a password reset link</p>
          </div>

          {!isEmailSent ? (
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <p>✅ Reset link has been sent to your email!</p>
              <p className={styles.smallText}>Please check your inbox and follow the instructions.</p>
            </div>
          )}

          <div className={styles.loginFooter}>
            <Link href="/login" className={styles.forgotPassword}>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 