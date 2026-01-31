import styles from './EngineStakenova.module.scss';
import widgetLogoIcon from './widget-logo.svg';

import comingSoonIcon from '@/assets/icons/coming-soon.svg';

import stepOneIcon from './step-1.svg';
import stepTwoIcon from './step-2.svg';
import { DollarSign, Gift, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function EngineStakenova() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const steps = sectionRef.current.querySelectorAll(`.${styles.step}`);
    const dividers = sectionRef.current.querySelectorAll(`.${styles.divider}`);

    const getAnim = (i) => steps[i].querySelector(`.${styles.anim}`);

    const activateDivider = (index, callback) => {
      const divider = dividers[index];
      if (!divider || divider.offsetParent === null) {
        callback?.();
        return;
      }
      divider.classList.add(styles.active);
      divider.addEventListener('transitionend', () => callback?.(), { once: true });
    };

    const runAnimation = () => {
      // Step 1
      steps[0].classList.add(styles.active);
      getAnim(0)?.addEventListener(
        'animationend',
        () => {
          activateDivider(0, () => {
            // Step 2
            steps[1].classList.add(styles.active);
            getAnim(1)?.addEventListener(
              'animationend',
              () => {
                activateDivider(1, () => {
                  // Step 3
                  steps[2].classList.add(styles.active);
                  const step3Anim = getAnim(2);

                  step3Anim?.addEventListener(
                    'animationend',
                    () => {
                      // Step 3 items по очереди
                      const items = steps[2].querySelectorAll(`.${styles.stepItem}`);
                      items.forEach((item, i) => {
                        item.style.animationDelay = `${i * 0.3}s`;
                        item.classList.add(styles.active);
                      });
                    },
                    { once: true },
                  );
                });
              },
              { once: true },
            );
          });
        },
        { once: true },
      );
    };

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            runAnimation(); // запускаем анимацию
            //observer.unobserve(entry.target); // один раз
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="section" ref={sectionRef}>
      <div className="__container">
        <div className={styles.header}>
          <h2 className={`h2 ${styles.title}`}>The Engine of StakeNova</h2>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepsTitle}>
            [ <span className={styles.highliht}>Earning</span> Process ]
          </div>
          <div className={`${styles.step} ${styles.active}`}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.stepBorder}`}
            >
              <rect x="0" y="0" width="100%" height="100%" stroke="var(--jet)" strokeWidth={3}></rect>

              <rect
                className={styles.anim}
                x="0"
                y="0"
                width="100%"
                height="100%"
                strokeWidth={3}
                stroke="var(--azure)"
              ></rect>

              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                stroke="#000000"
                strokeWidth={5}
                strokeDasharray="16 24"
              ></rect>
            </svg>
            <div className={styles.stepHeader}>
              <span className={styles.stepCount}>[ 01 ]</span>
              <h6 className={styles.stepTitle}>Deposit</h6>
              <span className={styles.stepDescr}>Deposit SOL tokens</span>
            </div>

            <div className={styles.stepContent}>
              <img src={stepOneIcon} alt="" />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.step}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.stepBorder}`}
            >
              <rect x="0" y="0" width="100%" height="100%" stroke="var(--jet)" strokeWidth={3}></rect>

              <rect
                className={styles.anim}
                x="0"
                y="0"
                width="100%"
                height="100%"
                strokeWidth={3}
                stroke="var(--azure)"
              ></rect>

              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                stroke="#000000"
                strokeWidth={5}
                strokeDasharray="16 24"
              ></rect>
            </svg>
            <div className={styles.stepHeader}>
              <span className={styles.stepCount}>[ 02 ]</span>
              <h6 className={styles.stepTitle}>Mint novaSOL</h6>
              <span className={styles.stepDescr}>Sent to your wallet</span>
            </div>

            <div className={styles.stepContent}>
              <img src={stepTwoIcon} alt="" />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.step}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.stepBorder}`}
            >
              <rect x="0" y="0" width="100%" height="100%" stroke="var(--jet)" strokeWidth={3}></rect>

              <rect
                className={styles.anim}
                x="0"
                y="0"
                width="100%"
                height="100%"
                strokeWidth={3}
                stroke="var(--azure)"
              ></rect>

              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                stroke="#000000"
                strokeWidth={5}
                strokeDasharray="16 24"
              ></rect>
            </svg>
            <div className={styles.stepHeader}>
              <span className={styles.stepCount}>[ 03]</span>
              <h6 className={styles.stepTitle}>Earn</h6>
              <span className={styles.stepDescr}>Automatically</span>
            </div>

            <div>
              <ul className={styles.stepItems}>
                <li className={styles.stepItem}>
                  <DollarSign size={24} />
                  <span>USDC Yield</span>
                </li>
                <li className={styles.stepItem}>
                  <Gift size={24} />
                  <span>StakeDrops</span>
                </li>
                <li className={styles.stepItem}>
                  <Users size={24} />
                  <span>Referral Fees</span>
                </li>
                <li className={styles.stepItem}>
                  <DollarSign size={24} />
                  <span>Platform Fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.widgetImg}>
            <img src={widgetLogoIcon} alt="" />
          </div>
          <div className={styles.widgetContent}>
            <div className={styles.comingSoon}>
              <img src={comingSoonIcon} alt="" />
              <span>Coming soon </span>
            </div>
            <h6 className={`h2 ${styles.widgetTitle}`}>StakeNova Widget - Just Copy And Paste</h6>
            <p className={`subTitle ${styles.subTitle}`}>Install staking in 30 seconds, generate SOL today</p>
          </div>
        </div>
      </div>
    </section>
  );
}
