import { useEffect, useState } from 'react';
import styles from './AwardsDrawer.module.scss';
import Button from '../ui/Button/Button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function AwardsDrawer({ open, onToggle, onClose, children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={onClose} />

      <aside className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <div className={styles.awardsHeader}>
          <span>awards & Nominees</span>
          <button onClick={onToggle}>
            <X size={24} />
          </button>
        </div>
        <Button onClick={onToggle} className={styles.handle}>
          Awards & Nominees
          {!open ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
        </Button>
        <div className={styles.content}>{children}</div>
      </aside>
    </>
  );
}
