import styles from './YeildSources.module.scss';
import SchemeDescktop from './schema-1920.svg?react';
import SchemeTablet from './schema-1024.svg?react';
import SchemeMobile from './schema-768.svg?react';

export default function YeildSources() {
  return (
    <section className="section">
      <div className="__container">
        <div className={styles.header}>
          <h2 className={` h2 ${styles.title}`}>A Universe of Yield Sources </h2>
          <p className={` subTitle ${styles.subTitle}`}>
            StakeNova combines base SOL yield with exclusive platform rewards
          </p>
        </div>

        <div className={styles.content}>
          <SchemeDescktop className={styles.desktop} />
          <SchemeTablet className={styles.tablet} />
          <SchemeMobile className={styles.mobile} />
        </div>
      </div>
    </section>
  );
}
