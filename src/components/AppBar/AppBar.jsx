import styles from './AppBar.module.scss';
import { useEffect, useState } from 'react';
import logo from '@/assets/images/logos/logo.svg';
import logoMob from '@/assets/images/logos/logo-mob.svg';
import { CheckCheck, Copy, Link, LogOut, Menu, SquarePen, Wallet, X } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import profileIcon from '@/assets/icons/star-btn.svg';
import awardsImg1 from '@/assets/images/awards/01.png';
import awardsImg2 from '@/assets/images/awards/02.png';
import Dropdown from '../ui/Dropdown/Dropdown';
import AwardsDrawer from '@/components/AwardsDrawer/AwardsDrawer';

export default function AppBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('stakeNova');
    setCopied(true);
  };

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    if (navOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [navOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={`__container ${styles.__container}`}>
          <a href="#" className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.desktop} />
            <img src={logoMob} alt="Logo" className={styles.mobile} />
          </a>
          <nav className={`${styles.nav} ${navOpen ? styles.open : ''}`}>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#">Pools</a>
              </li>
              <li>
                <a href="#">Create Pool</a>
              </li>
              <li>
                <a href="#">Referral</a>
              </li>
              <li>
                <a href="#">Widget</a>
              </li>
              <li>
                <a href="#">Communities</a>
              </li>
              <li>
                <a href="#">Gear</a>
              </li>
              <li>
                <a href="#">V1.</a>
              </li>
              <li>
                <Button onClick={toggleDrawer}>Awards & Nominees</Button>
              </li>
            </ul>
          </nav>
          <div className={styles.actions}>
            <div className={styles.profile}>
              {!isAuth ? (
                <Button variant="white" onClick={() => setIsAuth(true)}>
                  Login
                </Button>
              ) : (
                <Dropdown text="Profile" leftIcon={profileIcon} variant="outline" buttonProps={{ type: 'button' }}>
                  <a href="#" role="menuitem">
                    <SquarePen size={24} />
                    <span>Edit profile</span>
                  </a>

                  <a href="#" role="menuitem">
                    <Wallet size={24} />
                    <span>View Wallet</span>
                  </a>

                  <a role="menuitem" onClick={handleCopy} className={copied ? styles.copied : ''}>
                    {copied ? <CheckCheck size={24} /> : <Copy size={24} />}
                    <span>{copied ? 'Copied' : 'Copy address'}</span>
                  </a>

                  <a href="#" role="menuitem">
                    <Link size={24} />
                    <span>
                      Copy referral link <span className={styles.count}>(1 234)</span>
                    </span>
                  </a>

                  <a href="#" role="menuitem" onClick={() => setIsAuth(false)}>
                    <LogOut size={24} />
                    <span>Log out</span>
                  </a>
                </Dropdown>
              )}
            </div>

            <div className={styles.burgerIcon}>
              <Button onClick={toggleNav} variant="outline" className={styles.burgerButton}>
                {navOpen ? <X size={24} /> : <Menu size={24} />}
                <span className={styles.burgerText}>menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AwardsDrawer open={drawerOpen} onToggle={toggleDrawer} onClose={closeDrawer}>
        <div>
          <p>awards</p>
          <ul>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Nominees</p>
          <ul>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={awardsImg1} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </AwardsDrawer>
    </>
  );
}
