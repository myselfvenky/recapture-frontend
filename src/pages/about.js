import MainLayout from '@/components/Layout/MainLayout';
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function SDK() {
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

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { Recapture } from '@recapture/sdk';

const recapture = new Recapture('YOUR_API_KEY');

// Upload and transcribe a meeting
const result = await recapture.transcribe({
  audioFile: file,
  language: 'en',
  speakers: 4
});

console.log(result.minutes);`,
    },
    {
      language: 'Python',
      code: `from recapture import Recapture

recapture = Recapture('YOUR_API_KEY')

# Upload and transcribe a meeting
result = recapture.transcribe(
    audio_file=file,
    language='en',
    speakers=4
)

print(result.minutes)`,
    },
    {
      language: 'Node.js',
      code: `const { Recapture } = require('@recapture/sdk');

const recapture = new Recapture('YOUR_API_KEY');

// Using async/await
async function generateMinutes() {
  try {
    const result = await recapture.transcribe({
      audioFile: './meeting.mp3',
      language: 'en',
      speakers: 4
    });
    console.log(result.minutes);
  } catch (error) {
    console.error('Error:', error);
  }
}`,
    }
  ];

  return (
    <MainLayout>
        <div className={styles.sdkContainer}>
          <div className={styles.sdkHeader}>
            <h1>Recapture SDK Documentation</h1>
            <p>Integrate Recapture&apos;s powerful meeting transcription into your application</p>
          </div>

          <div className={styles.sdkSection}>
            <h2>🚀 Getting Started</h2>
            <div className={styles.installCommand}>
              <code>npm install @recapture/sdk</code>
              <button className={styles.copyButton}>Copy</button>
            </div>
          </div>

          <div className={styles.sdkSection}>
            <h2>🔑 Authentication</h2>
            <p>Get your API key from the <Link href="/login" className={styles.inlineLink}>dashboard</Link> and initialize the SDK:</p>
          </div>

          <div className={styles.sdkSection}>
            <h2>📚 Code Examples</h2>
            <div className={styles.codeExamples}>
              {sdkExamples.map((example, index) => (
                <div key={index} className={styles.codeBlock}>
                  <div className={styles.codeHeader}>
                    <span>{example.language}</span>
                    <button className={styles.copyButton}>Copy</button>
                  </div>
                  <pre>
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sdkSection}>
            <h2>📋 API Reference</h2>
            <div className={styles.apiMethods}>
              <div className={styles.methodCard}>
                <h3>transcribe(options)</h3>
                <p>Transcribes an audio file and generates meeting minutes.</p>
                <h4>Options:</h4>
                <ul>
                  <li><code>audioFile</code>: File or Buffer (required)</li>
                  <li><code>language</code>: String (default: &apos;en&apos;)</li>
                  <li><code>speakers</code>: Number (optional)</li>
                  <li><code>format</code>: &apos;text&apos; | &apos;markdown&apos; | &apos;json&apos;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </MainLayout>
  );
} 