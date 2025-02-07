import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import LanguageSelector from '../LanguageSelector';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <h1 className={styles.logo}>Recapture</h1>
        </Link>

        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.navCenter}>
            <Link 
              href="/recapture"
              className={`${styles.navLink} ${router.pathname === '/recapture' ? styles.activeLink : ''}`}
              onClick={closeMenu}
            >
              Try Now
            </Link>
            <Link 
              href="/about"
              className={`${styles.navLink} ${router.pathname === '/about' ? styles.activeLink : ''}`}
              onClick={closeMenu}
            >
              Documentation
            </Link>
            <Link 
              href="/pricing"
              className={`${styles.navLink} ${router.pathname === '/pricing' ? styles.activeLink : ''}`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
          </div>

          <div className={styles.authButtons}>
            <LanguageSelector />
            <Link href="/login" className={styles.loginBtn} onClick={closeMenu}>
              Sign In
            </Link>
            <Link href="/signup" className={styles.signupBtn} onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 