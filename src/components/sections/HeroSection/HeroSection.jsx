import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import styles from './HeroSection.module.scss';
export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={`__container`}>
        <div className={styles.body}>
          <div className={styles.left}>
            <h1 className={`h1`}>Deposit sol, earn usdc</h1>
            <p className={`subTitle`}>Stake SOL and receive stable USDC yield, automatic, simple, and transparent</p>
          </div>

          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.topHeader}>
                <span className={styles.topTitle}>
                  [ Next USDC Deposit <span className={styles.dashIcon}>//</span>{' '}
                  <span className={styles.highlight}>Epoch #612</span> ]
                </span>
                <span className={styles.percent}>49.1233 %</span>
              </div>
              <ProgressBar value={43} />
              <div className={styles.mobDescr}>
                <span>Epoch #612</span>
                <span>49.1233 %</span>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomItem}>
                <p className={styles.value}>1 885+</p>
                <p className={styles.text}>Total StakeDrops</p>
              </div>
              <div className={styles.bottomItem}>
                <p className={styles.value}>$ 56 123, 45</p>
                <p className={styles.text}>Total USDC Paid Out</p>
              </div>
              <div className={styles.bottomItem}>
                <p className={styles.value}>$5,1M</p>
                <p className={styles.text}>Total Value Locked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.splineWrap}>
        <iframe
          className={styles.spline}
          src="https://my.spline.design/stakenovahero768-TsAXwiA81sLbdVlmLt1jMjkA/"
          frameBorder="0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
