import styles from './EngineStakenova.module.scss';
import widgetLogoIcon from './widget-logo.svg';

import comingSoonIcon from '@/assets/icons/coming-soon.svg';

import stepOneIcon from './step-1.svg';
import stepTwoIcon from './step-2.svg';
import { DollarSign, Gift, Users } from 'lucide-react';

export default function EngineStakenova() {
  return (
    <section className="section">
      <div className="__container">
        <div className={styles.header}>
          <h2 className={`h2 ${styles.title}`}>The Engine of StakeNova</h2>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepsTitle}>
            [ <span className={styles.highliht}>Earning</span> Process ]
          </div>
          <div className={styles.step}>
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
