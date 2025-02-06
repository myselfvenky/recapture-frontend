import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

export default function Navbar() {
  const router = useRouter();
  
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Documentation",
      url: "/about",
    },
    {
      name: "Pricing",
      url: "/pricing",
    }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer}>
          <h2 className={styles.logo}>Recapture</h2>
        </Link>

        <div className={styles.navCenter}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`${styles.navLink} ${router.pathname === link.url ? styles.activeLink : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginBtn}>
            Log in
          </Link>
          <Link href="/signup" className={styles.signupBtn}>
            Try for free
          </Link>
        </div>
      </div>
    </nav>
  );
} 