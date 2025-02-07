import "@/styles/globals.css";
import { ReactLenis } from "lenis/react";
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>
    </LanguageProvider>
  );
}
