import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Dropdown.module.scss';
import Button from '../Button/Button';

export default function DropdownButton({
  text,
  leftIcon,
  children,
  variant = 'outline',
  className = '',
  buttonProps = {},
}) {
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);

  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
      if (items?.length) {
        items[0].focus();
        setFocusIndex(0);
      }
    } else {
      setFocusIndex(-1);
    }
  }, [open]);

  const onKeyDownTrigger = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((v) => !v);
    }
    if (e.key === 'ArrowDown' && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onKeyDownMenu = (e) => {
    const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
    if (!items?.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (focusIndex + 1) % items.length;
      items[next].focus();
      setFocusIndex(next);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (focusIndex - 1 + items.length) % items.length;
      items[prev].focus();
      setFocusIndex(prev);
    }

    if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  const onClick = () => setOpen((v) => !v);

  return (
    <div className={`${styles.root} ${className}`} ref={rootRef}>
      <Button
        {...buttonProps}
        ref={triggerRef}
        variant={variant}
        onClick={onClick}
        onKeyDown={onKeyDownTrigger}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {leftIcon && <img src={leftIcon} alt="" className={styles.leftIcon} width={24} height={24} />}
        {text}
        {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </Button>

      {open && (
        <div className={styles.menu} ref={menuRef} role="menu" onKeyDown={onKeyDownMenu}>
          {children}
        </div>
      )}
    </div>
  );
}
