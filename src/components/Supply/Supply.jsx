import styles from './Supply.module.css';

const categories = [
  { no: '01', name: 'Timber & Sheet', list: 'Softwood, treated timber, plywood, OSB, MDF, sheet board' },
  { no: '02', name: 'Cement & Aggregates', list: 'Cement, sand, ballast, MOT, postcrete, drainage' },
  { no: '03', name: 'Insulation & Boards', list: 'PIR board, mineral wool, plasterboard, beads & scrim' },
  { no: '04', name: 'Bricks, Blocks & Lintels', list: 'Facing & common bricks, concrete & aircrete blocks, lintels' },
  { no: '05', name: 'Roofing & Drainage', list: 'Membranes, battens, guttering, soil & waste, fittings' },
  { no: '06', name: 'Sanitaryware & Bathroom', list: 'Basins, WCs, brassware, showering, bathroom furniture' },
  { no: '07', name: 'Fixings & Ironmongery', list: 'Screws, fixings, adhesives, sealants, hand tools' },
  { no: '08', name: 'Landscaping & Outdoor', list: 'Paving, decking, fencing, sleepers, sub-base' }
];

export default function Supply() {
  return (
    <section className={`${styles.supply} ${styles.wrap}`} id="supply">
      <div className={`${styles['sec-head']} reveal`}>
        <div className={styles['sec-kick']}>
          <span className={styles.bar}></span>Counter 01 — Supply
        </div>
        <h2 className={styles['sec-h2']}>Everything a build needs, from one yard.</h2>
        <p className={styles['sec-intro']}>
          Timber, construction materials and sanitaryware for trade and retail. Walk-in at the trade counter, or have it delivered to site.
        </p>
      </div>
      <div className={`${styles['cat-grid']} reveal`}>
        {categories.map((cat) => (
          <div className={styles.cat} key={cat.no}>
            <div className={styles.cat__no}>{cat.no}</div>
            <div className={styles.cat__name}>{cat.name}</div>
            <div className={styles.cat__list}>{cat.list}</div>
          </div>
        ))}
      </div>
      <div className={`${styles['supply-note']} reveal`}>
        <span className={styles.tick}>✓</span>All lines available for collection at the yard or delivery to site.
      </div>
    </section>
  );
}
