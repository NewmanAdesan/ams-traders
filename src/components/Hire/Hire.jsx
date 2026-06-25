import styles from './Hire.module.css';

const equipment = [
  { no: '01', name: 'Excavators & Dumpers', inc: 'Mini & midi excavators, tracked dumpers, breakers' },
  { no: '02', name: 'Compaction', inc: 'Plate compactors, trench rammers, rollers' },
  { no: '03', name: 'Access & Lifting', inc: 'Scaffold towers, telehandlers, material lifts' },
  { no: '04', name: 'Concreting', inc: 'Mixers, pokers, power floats' },
  { no: '05', name: 'Power & Site', inc: 'Generators, lighting towers, pumps, heaters' },
  { no: '06', name: 'Tools', inc: 'Breakers, drills, cut-off saws, sanders' }
];

export default function Hire() {
  return (
    <section className={styles.hire} id="hire">
      <div className={styles.wrap}>
        <div className={`${styles['sec-head']} reveal`}>
          <div className={styles['sec-kick']}>
            <span className={styles.bar}></span>Counter 02 — Hire
          </div>
          <h2 className={styles['sec-h2']}>Plant and tools, hired by the day, week or month.</h2>
          <p className={styles['sec-intro']}>
            Civil-engineering plant and site equipment, kept ready at the yard. Rates are quoted per job — tell the hire desk what you need and when.
          </p>
        </div>
        <div className={`${styles.ratecard} reveal`}>
          <div className={styles['rate-headrow']}>
            <span>No.</span><span>Equipment</span><span>Typically includes</span><span>Hire rate</span>
          </div>
          {equipment.map((item) => (
            <div className={styles['rate-row']} key={item.no}>
              <span className={styles['rate-row__no']}>{item.no}</span>
              <span className={styles['rate-row__name']}>{item.name}</span>
              <span className={styles['rate-row__inc']}>{item.inc}</span>
              <span className={styles['rate-row__rate']}>
                <span className={styles.poa}>On request</span>
              </span>
            </div>
          ))}
        </div>
        <div className={`${styles['hire-note']} reveal`}>
          <div className={styles.ln}>
            <span>Hired by the <b>day, week or month</b>, with collection or delivery.</span>
          </div>
          <div className={styles.ln}>
            <span>Operated or self-drive plant, delivered across the local area.</span>
          </div>
        </div>
        <a className={styles['hire-cta']} href="#contact">
          Call the hire desk <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
