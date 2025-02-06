import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/Layout/MainLayout';
import styles from "../styles/Home.module.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const links = [
    {
      "name": "Voice Models",
      "url": "/"
    },
    {
      "name": "SDK",
      "url": "/about"
    },
    {
      "name": "About",
      "url": "/contact"
    },
    {
      "name": "Login",
      "url": "/login"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Add your actual login logic here
    console.log('Login attempt:', { email, password });
    
    setIsLoading(false);
  };

  return (
    <MainLayout>

        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <div className={styles.loginHeader}>
              <h1>Welcome Back</h1>
              <p>Sign in to your Recapture account</p>
            </div>

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

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className={styles.loginFooter}>
              <p>Don&apos;t have an account? <Link href="/signup" className={styles.inlineLink}>Sign up</Link></p>
              <Link href="/forgot-password" className={styles.forgotPassword}>
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
    </MainLayout>
  );
} 