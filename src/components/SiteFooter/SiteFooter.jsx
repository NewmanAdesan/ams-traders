import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.foot} id="footer">
      <div className={styles.wrap}>
        <div className={styles.foot__top}>
          <div className={styles.foot__brand}>
            <div className={styles.logo}>
              <div className={styles.logo__mark}>AMS</div>
              <div>
                <div className={styles.logo__name}>A.M.S TRADERS</div>
                <div className={styles.logo__sub}>(U.K) Ltd · Sheerness</div>
              </div>
            </div>
            <p className={styles.foot__tag}>
              Building materials and plant hire, supplied from Sheerness since 2018. Trade and retail welcome.
            </p>
          </div>
          <div className={styles.fcol}>
            <h4>Counters</h4>
            <a href="#supply">Materials Supply</a>
            <a href="#hire">Plant &amp; Tool Hire</a>
            <a href="#trade">Trade Accounts</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.fcol}>
            <h4>The Yard</h4>
            <p className={styles.muted}>47–48 Fourth Avenue, Eastchurch, Sheerness, Kent, ME12 4EW</p>
            <a href="tel:+447402341854">+44 7402 341854</a>
            <a href="mailto:Accounts@amstradersuk.co.uk">Accounts@amstradersuk.co.uk</a>
          </div>
          <div className={styles.fcol}>
            <h4>Company</h4>
            <p className={styles.muted}>A.M.S Traders (U.K) Ltd</p>
            <p className={styles.muted}>Company No. 11625626</p>
            <p className={styles.muted}>Incorporated 2018 · England &amp; Wales</p>
          </div>
        </div>
        <div className={styles.foot__bottom}>
          <span>© 2026 A.M.S Traders (U.K) Ltd</span>
          <span>Registered in England &amp; Wales · No. 11625626</span>
        </div>
      </div>
    </footer>
  );
}
