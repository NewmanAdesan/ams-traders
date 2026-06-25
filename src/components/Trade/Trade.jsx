import styles from './Trade.module.css';

export default function Trade() {
  return (
    <section className={styles.trade} id="trade">
      <div className={styles.wrap}>
        <div className={`${styles['sec-head']} reveal`}>
          <div className={styles['sec-kick']}>
            <span className={styles.bar}></span>Trade Accounts
          </div>
          <h2 className={styles['sec-h2']}>One account for supply and hire.</h2>
          <p className={styles['sec-intro']}>
            Buy materials and hire plant on the same account, settled monthly, with pricing set for the trades. Quick to set up — and it works across both counters.
          </p>
        </div>
        <div className={`${styles.steps} reveal`}>
          <div className={styles.step}>
            <div className={styles.step__no}>01</div>
            <div className={styles.step__t}>Tell us about your trade</div>
            <div className={styles.step__d}>A few details about your business and the work you do.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.step__no}>02</div>
            <div className={styles.step__t}>We open your account</div>
            <div className={styles.step__d}>Quick set-up, then you're trading on account terms.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.step__no}>03</div>
            <div className={styles.step__t}>Buy &amp; hire on account</div>
            <div className={styles.step__d}>Collect, order or hire — invoiced monthly on one statement.</div>
          </div>
        </div>
        <div className={`${styles.benefits} reveal`}>
          <div className={styles.benefit}><span className={styles.tick}>✓</span><span>Trade pricing for account holders</span></div>
          <div className={styles.benefit}><span className={styles.tick}>✓</span><span>Monthly invoicing</span></div>
          <div className={styles.benefit}><span className={styles.tick}>✓</span><span>Priority collection &amp; delivery</span></div>
          <div className={styles.benefit}><span className={styles.tick}>✓</span><span>Supply and hire on one account</span></div>
        </div>
        <a className={styles['trade-link']} href="#contact">
          Open one at the yard <span className={styles.dn} aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
