import React, { useState } from 'react';
import styles from './MyCards.module.css';

// PUBLIC_INTERFACE
export default function MyCards() {
  /**
   * MyCards screen converted from static HTML/CSS into a React component.
   * Implements Ocean Professional styling, scoped with CSS modules.
   * Includes interactivity for CVV toggle using React state.
   */
  const [cvvHidden, setCvvHidden] = useState(true);
  const realCVV = '920';

  // PUBLIC_INTERFACE
  const toggleCVV = () => {
    setCvvHidden((prev) => !prev);
  };

  return (
    <div className={styles.pageBg}>
      <main className={styles.figmaCanvas} role="main" aria-label="My cards screen">
        {/* Status bar */}
        <div className={styles.statusBar}>
          <div className={styles.typo61} aria-hidden="true">10:48</div>
          <div className={styles.row} style={{ gap: 12, marginLeft: 'auto' }}>
            <div className={styles.iconBtn} aria-hidden="true" title="Wi-Fi">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path stroke="#252525" strokeWidth="1" d="M2 9c3-3 7-3 10 0"></path>
                <path stroke="#252525" strokeWidth="1" d="M4 11c2-2 4-2 6 0"></path>
                <circle cx="7" cy="12" r="1" fill="#252525"></circle>
              </svg>
            </div>
            <div className={styles.iconBtn} aria-hidden="true" title="Battery">
              <svg width="14" height="14" viewBox="0 0 16 14" aria-hidden="true">
                <rect x="1.5" y="3.5" width="11" height="7" stroke="#252525" fill="none" strokeWidth="1"></rect>
                <rect x="13.5" y="5.5" width="1.5" height="3" fill="#252525"></rect>
              </svg>
            </div>
          </div>
        </div>

        {/* Header and content area */}
        <section className={styles.headerArea}>
          <button className={styles.backBtn} aria-label="Back">
            <span className={styles.visuallyHidden}>Back</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="14,6 8,12 14,18" fill="none" stroke="#42794a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
            </svg>
          </button>

          <div className={styles.title}>
            <div className={styles.typo67}>Bank</div>
          </div>

          {/* Tab bar */}
          <div className={styles.tabBar}>
            <div className={styles.tab}><span className={styles.typo62}>Accounts</span></div>
            <div className={styles.tabActive}><span className={styles.typo72} style={{ color: 'var(--color-42794a)' }}>Cards</span></div>
          </div>

          {/* Add card CTA */}
          <button className={styles.addCardBtn}>
            <div className={`${styles.row} ${styles.center}`} style={{ gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10.5" fill="none" stroke="#ffffff" strokeWidth="1"></circle>
                <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff" strokeWidth="1"></line>
                <line x1="7" y1="12" x2="17" y2="12" stroke="#ffffff" strokeWidth="1"></line>
              </svg>
              <span className={styles.typo65}>Add new card</span>
            </div>
          </button>

          {/* Content stack */}
          <div className={styles.contentStack}>
            <div className={styles.typo62} style={{ height: 14 }}>My cards</div>

            {/* Hero card */}
            <div className={styles.cardHero}>
              <img src="/assets/figmaimages/figma_image_1_237.png" alt="" className={styles.cardHeroBg} />
              <div className={styles.cardHeroOverlay}></div>
              <img className={styles.cardHeroChip} src="/assets/figmaimages/figma_image_1_239.png" alt="Card chip" />
              <div className={`${styles.cardHeroNumber} ${styles.typo68}`}>8174 5300 0364 1148</div>

              <div className={styles.cardHeroMeta}>
                <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                  <span className={styles.typo69}>EXP. DATE</span>
                  <span className={styles.typo70}>09/30</span>
                </div>
                <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                  <span className={styles.typo69}>SECURITY CODE</span>
                  <span className={styles.typo70}>{realCVV}</span>
                </div>
              </div>

              <div className={styles.cardHeroWifi} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 9c6-6 14-6 20 0" stroke="#ffffff" fill="none"></path>
                  <path d="M6 13c4-4 8-4 12 0" stroke="#ffffff" fill="none"></path>
                  <circle cx="12" cy="17" r="1.5" fill="#ffffff"></circle>
                </svg>
              </div>
              <div className={styles.cardHeroBrand} aria-hidden="true">
                <svg width="62" height="24" viewBox="0 0 62 24" aria-hidden="true">
                  <rect x="0" y="4" width="62" height="16" fill="#dddddd"></rect>
                </svg>
              </div>
            </div>

            {/* Details block */}
            <div className={styles.detailsBlock} role="region" aria-label="Card details">
              {/* Card number row */}
              <div className={styles.detailsRow}>
                <div className={styles.col}>
                  <div className={styles.typo62}>Card number</div>
                  <div className={styles.typo71}>9876543210123453</div>
                </div>
                <button className={styles.iconBtn} aria-label="Copy number" title="Copy number">
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
                    <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
                  </svg>
                </button>
              </div>

              <div className={styles.divider}></div>

              {/* Expiry row */}
              <div className={styles.detailsRow}>
                <div className={styles.col}>
                  <div className={styles.typo62}>Expiry</div>
                  <div className={styles.typo71}>09/30</div>
                </div>
                <button className={styles.iconBtn} aria-label="Copy expiry" title="Copy expiry">
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
                    <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
                  </svg>
                </button>
              </div>

              <div className={styles.divider}></div>

              {/* CVV row */}
              <div className={styles.detailsRow}>
                <div className={styles.col}>
                  <div className={styles.typo62}>Security code (CVV)</div>
                  <div className={styles.typo52} aria-live="polite">{cvvHidden ? '***' : realCVV}</div>
                </div>
                <button
                  className={styles.iconBtn}
                  aria-label={cvvHidden ? 'Show CVV' : 'Hide CVV'}
                  title={cvvHidden ? 'Show CVV' : 'Hide CVV'}
                  onClick={toggleCVV}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" stroke="#42794a" fill="none"></path>
                    {!cvvHidden && <circle cx="12" cy="12" r="2" fill="#42794a"></circle>}
                    {cvvHidden && <line x1="3" y1="3" x2="21" y2="21" stroke="#42794a"></line>}
                  </svg>
                </button>
              </div>
            </div>

            {/* Pagination indicators */}
            <div className={styles.row} style={{ width: 32, height: 4, gap: 8, margin: '12px auto 0' }} aria-hidden="true">
              <div style={{ width: 4, height: 4, background: '#dddddd', borderRadius: 20 }}></div>
              <div style={{ width: 16, height: 4, background: '#61ce70', borderRadius: 20 }}></div>
              <div style={{ width: 4, height: 4, background: '#dddddd', borderRadius: 20 }}></div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className={styles.bottomNav} aria-label="Bottom navigation">
          <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
            <div className={styles.iconBtn} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 12l9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" stroke="#94ca9c" fill="none"></path>
              </svg>
            </div>
            <div className={styles.typo66} style={{ color: '#94ca9c' }}>Home</div>
          </div>
          <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
            <div className={styles.iconBtn} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#ffffff" fill="none"></rect>
              </svg>
            </div>
            <div className={styles.typo65}>Bank</div>
          </div>
          <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
            <div className={styles.iconBtn} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#94ca9c" fill="none"></circle>
                <path d="M8 12h8" stroke="#94ca9c"></path>
              </svg>
            </div>
            <div className={styles.typo66} style={{ color: '#94ca9c' }}>History</div>
          </div>
          <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
            <div className={styles.iconBtn} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="10" r="4" fill="#ffffff"></circle>
                <path d="M6 18c3-4 9-4 12 0" stroke="#ffffff" fill="none"></path>
                <circle cx="12" cy="12" r="10" stroke="#ffffff" fill="none"></circle>
              </svg>
            </div>
            <div className={styles.typo65}>Profile</div>
          </div>
        </nav>
      </main>
    </div>
  );
}
