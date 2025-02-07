import { useState } from 'react';
import styles from '@/styles/components/LanguageSelector.module.css';
import { AiOutlineGlobal, AiOutlineCheck } from 'react-icons/ai';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, setCurrentLang, detectedLang } = useLanguage();

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <button 
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineGlobal />
        <span>{languages[currentLang].name}</span>
      </button>

      {isOpen && (
        <div className={styles.languageDropdown}>
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              className={`${styles.languageOption} ${currentLang === code ? styles.selected : ''}`}
              onClick={() => handleLanguageChange(code)}
            >
              <span>{lang.name}</span>
              {detectedLang === code && (
                <span className={styles.detected}>(Detected)</span>
              )}
              {currentLang === code && (
                <AiOutlineCheck className={styles.checkmark} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 