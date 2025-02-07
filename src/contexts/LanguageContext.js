import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: {
    name: 'English',
    direction: 'ltr',
    translations: {
      nav: {
        tryNow: 'Try Now',
        docs: 'Documentation',
        pricing: 'Pricing',
        signIn: 'Sign In',
        signUp: 'Sign Up'
      },
      upload: {
        title: 'Upload Recording',
        dragDrop: 'Drag & drop your audio file here or click to browse',
        supports: 'Supports MP3, WAV, M4A files',
        generate: 'Generate Minutes',
        generating: 'Generating...'
      },
      progress: {
        transcribing: 'Transcribing audio...',
        analyzing: 'Analyzing speakers...',
        identifying: 'Identifying key points...',
        generating: 'Generating summary...',
        finalizing: 'Finalizing minutes...'
      },
      modes: {
        upload: 'Upload Recording',
        live: 'Start Meeting'
      },
      recording: {
        start: 'Start Recording',
        stop: 'Stop',
        pause: 'Pause',
        resume: 'Resume',
        recording: 'Recording',
        new: 'New Recording'
      }
    }
  },
  es: {
    name: 'Español',
    direction: 'ltr',
    translations: {
      nav: {
        tryNow: 'Pruébalo',
        docs: 'Documentación',
        pricing: 'Precios',
        signIn: 'Iniciar Sesión',
        signUp: 'Registrarse'
      },
      upload: {
        title: 'Subir Grabación',
        dragDrop: 'Arrastra y suelta tu archivo de audio aquí o haz clic para explorar',
        supports: 'Soporta archivos MP3, WAV, M4A',
        generate: 'Generar Acta',
        generating: 'Generando...'
      },
      progress: {
        transcribing: 'Transcribiendo audio...',
        analyzing: 'Analizando hablantes...',
        identifying: 'Identificando puntos clave...',
        generating: 'Generando resumen...',
        finalizing: 'Finalizando acta...'
      },
      modes: {
        upload: 'Subir Grabación',
        live: 'Iniciar Reunión'
      },
      recording: {
        start: 'Iniciar Grabación',
        stop: 'Detener',
        pause: 'Pausar',
        resume: 'Reanudar',
        recording: 'Grabando',
        new: 'Nueva Grabación'
      }
    }
  },
  // Add more languages as needed
};

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [detectedLang, setDetectedLang] = useState(null);

  const value = {
    currentLang,
    setCurrentLang,
    detectedLang,
    setDetectedLang,
    translations: languages[currentLang].translations,
    direction: languages[currentLang].direction
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 