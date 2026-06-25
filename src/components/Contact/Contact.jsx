import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={`${styles.contact} ${styles.wrap}`} id="contact">
      <div className={`${styles['sec-head']} reveal`}>
        <div className={styles['sec-kick']}>
          <span className={styles.bar}></span>Contact — The Yard
        </div>
        <h2 className={styles['sec-h2']}>Come to the yard, or call ahead.</h2>
        <p className={styles['sec-intro']}>
          Supply and hire run from one yard in Sheerness. Walk in at the counter, or get in touch and we'll have it ready.
        </p>
      </div>
      <div className={styles['contact-grid']}>
        <div className={`${styles.yard} reveal`}>
          <div className={styles.yard__label}>The Yard</div>
          <div className={styles.yard__addr}>
            47–48 Fourth Avenue,<br />
            Eastchurch, Sheerness,<br />
            Kent, ME12 4EW
          </div>
          <a
            className={styles.dir}
            href="https://www.google.com/maps/search/?api=1&query=47-48+Fourth+Avenue+Eastchurch+Sheerness+ME12+4EW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <span aria-hidden="true">→</span>
          </a>
          <div className={styles.hours}>
            <div className={styles.hours__row}>
              <span className={styles.hours__d}>Monday – Friday</span>
              <span className={styles.hours__t}>7:00 – 17:00</span>
            </div>
            <div className={styles.hours__row}>
              <span className={styles.hours__d}>Saturday</span>
              <span className={styles.hours__t}>8:00 – 12:00</span>
            </div>
            <div className={styles.hours__row}>
              <span className={styles.hours__d}>Sunday</span>
              <span className={styles.hours__t}>Closed</span>
            </div>
          </div>
        </div>
        <div className={styles.reach}>
          <a className={`${styles.rcard} reveal`} href="tel:+447402341854">
            <div className={styles.rcard__k}>Call the yard</div>
            <div className={styles.rcard__v}>+44 7402 341854</div>
          </a>
          <a className={`${styles.rcard} reveal`} href="mailto:Accounts@amstradersuk.co.uk">
            <div className={styles.rcard__k}>Email</div>
            <div className={styles.rcard__v}>Accounts@amstradersuk.co.uk</div>
          </a>
        </div>
      </div>
    </section>
  );
}
