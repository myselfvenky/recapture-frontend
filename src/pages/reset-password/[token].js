import { useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/Layout/MainLayout';
import styles from '@/styles/Home.module.css';

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      // Add your actual password reset logic here using the token
      setTimeout(() => {
        router.push('/login');
      }, 2000);
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
            <h1>Create New Password</h1>
            <p>Please enter your new password</p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={isLoading}
              >
                {isLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <p>✅ Password updated successfully!</p>
              <p className={styles.smallText}>Redirecting to login...</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
} 