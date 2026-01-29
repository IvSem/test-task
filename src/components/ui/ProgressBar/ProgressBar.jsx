import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.scss';

export default function ProgressBar({ value = 0 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setProgress(value);
    });
  }, [value]);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressLine} style={{ width: `${progress}%` }} />
    </div>
  );
}
