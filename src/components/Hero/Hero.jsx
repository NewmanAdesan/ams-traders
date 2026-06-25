import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.kicker}>
          <span className={styles.est}>Est. 2018</span>
          <span className={styles.loc}>Trade supplier &amp; hire · Sheerness, Kent</span>
        </div>
        <h1 className={styles.hero__h1}>Building materials and plant hire, from our Sheerness yard.</h1>
        <p className={styles.hero__sub}>
          A.M.S Traders supplies timber, construction materials and sanitaryware to trade and site — and hires out the civil-engineering plant to match. <b>One yard, both counters.</b>
        </p>
        <div className={styles.counters}>
          <a className={styles.counter} href="#supply">
            <div className={styles.counter__top}>
              <span className={styles.counter__no}>01</span>
              <span className={styles.counter__tag}>Buy &amp; collect / deliver</span>
            </div>
            <div className={styles.counter__name}>Materials Supply</div>
            <div className={styles.counter__list}>
              Timber &amp; sheet materials · Cement, aggregates &amp; groundwork · Insulation &amp; plasterboard · Sanitaryware &amp; bathroom
            </div>
            <span className={styles.counter__cta}>
              Browse supply <span className={styles.ar} aria-hidden="true">→</span>
            </span>
          </a>
          <a className={styles.counter} href="#hire">
            <div className={styles.counter__top}>
              <span className={styles.counter__no}>02</span>
              <span className={styles.counter__tag}>Hire by day / week</span>
            </div>
            <div className={styles.counter__name}>Plant &amp; Tool Hire</div>
            <div className={styles.counter__list}>
              Excavators &amp; groundwork plant · Access &amp; lifting · Compaction &amp; concreting · Site tools &amp; equipment
            </div>
            <span className={styles.counter__cta}>
              View hire <span className={styles.ar} aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={`marquee__track ${styles.marquee__track}`}>
          <span>Timber</span><span>Cement &amp; Aggregates</span><span>Insulation</span><span>Plasterboard</span><span>Sanitaryware</span><span>Groundwork Plant</span><span>Access Equipment</span><span>Tool Hire</span>
          <span>Timber</span><span>Cement &amp; Aggregates</span><span>Insulation</span><span>Plasterboard</span><span>Sanitaryware</span><span>Groundwork Plant</span><span>Access Equipment</span><span>Tool Hire</span>
        </div>
      </div>
    </>
  );
}
