import styles from './Footer.module.scss';
import logo from '@/assets/images/logos/logo.svg';
import socialIcon1 from '@/assets/icons/socials/01.svg';
import { BotMessageSquare, File, Folder, Info, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`__container`}>
        <div className={styles.footerBody}>
          <div>
            <a href="#" className={styles.logoLink}>
              <img src={logo} alt="" />
            </a>
          </div>

          <div className={styles.footerLinks}>
            <span className={styles.copy}>© Stakenova, 2025</span>
            <ul>
              <li>
                <a href="#">
                  <File size={24} />
                  <span>Terms of Use</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Shield size={24} />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Info size={24} />
                  <span>Protocol disclaimer</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Folder size={24} />
                  <span>Docs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BotMessageSquare size={24} />
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
            <a className={styles.socialLink}>
              <img src={socialIcon1} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
