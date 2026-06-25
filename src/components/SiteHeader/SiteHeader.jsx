import { useEffect, useRef, useState } from 'react';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeSection }) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open', 'lock');
      // Focus trap setup
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    } else {
      document.body.classList.remove('menu-open', 'lock');
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        if (burgerRef.current) {
          burgerRef.current.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={styles.topbar}>
        <a className={styles.logo} href="#top" aria-label="A.M.S Traders home">
          {/* <div className={styles.logo__mark}>AMS</div> */}
          <div>
            <div className={styles.logo__name}>A.M.S TRADERS</div>
            <div className={styles.logo__sub}>(U.K) Ltd · Sheerness</div>
          </div>
        </a>
        <nav className={styles.links} aria-label="Primary">
          <a href="#supply" aria-current={activeSection === 'supply' ? 'true' : undefined}>Supply</a>
          <a href="#hire" aria-current={activeSection === 'hire' ? 'true' : undefined}>Hire</a>
          <a href="#trade" aria-current={activeSection === 'trade' ? 'true' : undefined}>Trade Accounts</a>
          <a href="#contact" aria-current={activeSection === 'contact' ? 'true' : undefined}>Contact</a>
        </nav>
        <a className={styles['cta-trade']} href="#trade">Open a trade account</a>
        <button
          ref={burgerRef}
          className={styles.burger}
          id="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="drawer"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={styles.drawer} id="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
        <ul className={styles.drawer__links}>
          <li><a ref={firstLinkRef} href="#supply" onClick={handleLinkClick}>Supply</a></li>
          <li><a href="#hire" onClick={handleLinkClick}>Hire</a></li>
          <li><a href="#trade" onClick={handleLinkClick}>Trade Accounts</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div className={styles.drawer__foot}>
          <div className={styles.blk}>
            <div className={styles.k}>The Yard</div>
            <div className={styles.v}>47–48 Fourth Avenue, Eastchurch, Sheerness, ME12 4EW</div>
          </div>
          <div className={styles.blk}>
            <div className={styles.k}>Call</div>
            <a className={styles.v} href="tel:+447402341854">+44 7402 341854</a>
          </div>
        </div>
      </div>
    </>
  );
}
