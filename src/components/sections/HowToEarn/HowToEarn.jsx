import styles from './HowToEarn.module.scss';
import depositIcon from '@/assets/icons/how-to-earn/deposit.svg';
import clockIcon from '@/assets/icons/how-to-earn/clock.svg';
import usdcIcon from '@/assets/icons/how-to-earn/usdt.svg';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'DEPOSIT',
    desc: 'Deposit SOL tokens',
    icon: depositIcon,
  },
  {
    id: 2,
    title: 'WAIT 1 EPOCH',
    desc: 'Wait approximately 2 days',
    icon: clockIcon,
  },
  {
    id: 3,
    title: 'CLAIM USDC',
    desc: 'Receive your stable yield rewards',
    icon: usdcIcon,
  },
  {
    id: 4,
    title: 'CLAIM USDC',
    desc: 'Receive your stable yield rewards',
    icon: usdcIcon,
  },
];

export default function HowToEarn() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.howToEarn}`} ref={sectionRef}>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.left}>
            <h2 className={`h2 ${styles.title}`}>How to earn </h2>
            <p className={`subTitle ${styles.subtitle}`}>Follow these simple steps to start earning</p>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`${styles.step} ${visible ? styles.visible : ''}`}
                style={{ '--delay': `${index * 1}s` }}
              >
                <div className={styles.content}>
                  <span className={styles.stepNumber}>[{step.id.toString().padStart(2, '0')}]</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>

                <div className={styles.iconWrapper}>
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
