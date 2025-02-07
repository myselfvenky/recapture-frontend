import { useState } from 'react';
import styles from '@/styles/components/ExportOptions.module.css';
import { 
  AiOutlineFilePdf, 
  AiOutlineFileWord, 
  AiOutlineFileMarkdown, 
  AiOutlineFileText,
  AiOutlineCloudDownload
} from 'react-icons/ai';

const exportFormats = [
  { id: 'pdf', name: 'PDF', icon: <AiOutlineFilePdf size={20} /> },
  { id: 'docx', name: 'Word', icon: <AiOutlineFileWord size={20} /> },
  { id: 'md', name: 'Markdown', icon: <AiOutlineFileMarkdown size={20} /> },
  { id: 'txt', name: 'Plain Text', icon: <AiOutlineFileText size={20} /> }
];

export default function ExportOptions({ onExport }) {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [showOptions, setShowOptions] = useState(false);
  const [includeAnalytics, setIncludeAnalytics] = useState(true);
  const [includeBranding, setIncludeBranding] = useState(true);

  const handleExport = () => {
    onExport({
      format: selectedFormat,
      options: {
        includeAnalytics,
        includeBranding
      }
    });
    setShowOptions(false);
  };

  return (
    <div className={styles.exportContainer}>
      <div className={styles.exportHeader}>
        <div className={styles.formatSelector}>
          {exportFormats.map(format => (
            <button
              key={format.id}
              className={`${styles.formatButton} ${selectedFormat === format.id ? styles.active : ''}`}
              onClick={() => setSelectedFormat(format.id)}
              title={format.name}
            >
              {format.icon}
              <span>{format.name}</span>
            </button>
          ))}
        </div>
        <button 
          className={styles.optionsButton}
          onClick={() => setShowOptions(!showOptions)}
        >
          Options
        </button>
      </div>

      {showOptions && (
        <div className={styles.optionsPanel}>
          <label className={styles.optionLabel}>
            <input
              type="checkbox"
              checked={includeAnalytics}
              onChange={(e) => setIncludeAnalytics(e.target.checked)}
            />
            Include Speaker Analytics
          </label>
          <label className={styles.optionLabel}>
            <input
              type="checkbox"
              checked={includeBranding}
              onChange={(e) => setIncludeBranding(e.target.checked)}
            />
            Include Company Branding
          </label>
        </div>
      )}

      <button 
        className={styles.exportButton}
        onClick={handleExport}
      >
        <AiOutlineCloudDownload size={20} />
        Export as {exportFormats.find(f => f.id === selectedFormat)?.name}
      </button>
    </div>
  );
} 