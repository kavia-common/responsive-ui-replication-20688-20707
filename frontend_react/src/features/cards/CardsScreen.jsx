import React, { useState } from 'react';
import styles from './CardsScreen.module.css';

// PUBLIC_INTERFACE
export function StatusBar() {
  /** Status bar displaying time and system icons */
  return (
    <div className={styles.statusBar} aria-label="Status bar">
      <div className={styles.time} aria-hidden="true">10:48</div>
      <div className={styles.statusIcons}>
        {/* WiFi */}
        <span className={styles.iconBtn} aria-hidden="true" title="Wi-Fi">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path stroke="#252525" strokeWidth="1" d="M2 9c3-3 7-3 10 0"/>
            <path stroke="#252525" strokeWidth="1" d="M4 11c2-2 4-2 6 0"/>
            <circle cx="7" cy="12" r="1" fill="#252525"/>
          </svg>
        </span>
        {/* Battery */}
        <span className={styles.iconBtn} aria-hidden="true" title="Battery">
          <svg width="14" height="14" viewBox="0 0 16 14" aria-hidden="true">
            <rect x="1.5" y="3.5" width="11" height="7" stroke="#252525" fill="none" strokeWidth="1"/>
            <rect x="13.5" y="5.5" width="1.5" height="3" fill="#252525"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
export function TabBar({ activeTab, onTabChange }) {
  /** TabBar for Accounts and Cards. */
  return (
    <div className={styles.tabBar} role="tablist" aria-label="Account/Card tabs">
      <button
        className={activeTab === 'accounts' ? styles.tab : styles.tabInactive}
        aria-selected={activeTab === 'accounts'}
        role="tab"
        tabIndex={0}
        onClick={() => onTabChange('accounts')}
        type="button"
      >
        <span className={styles.typo62}>Accounts</span>
      </button>
      <button
        className={activeTab === 'cards' ? styles.tabActive : styles.tab}
        aria-selected={activeTab === 'cards'}
        role="tab"
        tabIndex={0}
        style={activeTab === 'cards' ? { border: '1px solid var(--color-42794a)' } : {}}
        onClick={() => onTabChange('cards')}
        type="button"
      >
        <span className={styles.typo72} style={{ color: 'var(--color-42794a)' }}>Cards</span>
      </button>
    </div>
  );
}

// PUBLIC_INTERFACE
export function HeroCard() {
  /** Main credit/debit card representation at top, visually styled */
  return (
    <div className={styles.cardHero} aria-label="Main card">
      <img src="/assets/figmaimages/figma_image_1_237.png" alt="" className={styles.cardHeroBg} />
      <div className={styles.cardHeroOverlay} />
      <img className={styles.cardHeroChip} src="/assets/figmaimages/figma_image_1_239.png" alt="Card chip" />
      <div className={`${styles.cardHeroNumber} ${styles.typo68}`}>8174 5300 0364 1148</div>

      <div className={styles.cardHeroMeta}>
        <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
          <span className={styles.typo69}>EXP. DATE</span>
          <span className={styles.typo70}>09/30</span>
        </div>
        <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
          <span className={styles.typo69}>SECURITY CODE</span>
          <span className={styles.typo70}>920</span>
        </div>
      </div>
      <div className={styles.cardHeroWifi} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M2 9c6-6 14-6 20 0" stroke="#ffffff" fill="none"/><path d="M6 13c4-4 8-4 12 0" stroke="#ffffff" fill="none"/><circle cx="12" cy="17" r="1.5" fill="#ffffff"/></svg>
      </div>
      <div className={styles.cardHeroBrand} aria-hidden="true">
        <svg width="62" height="24" viewBox="0 0 62 24"><rect x="0" y="4" width="62" height="16" fill="#dddddd"/></svg>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
export function CardDetails() {
  /**
   * Card detail rows: implements copy actions and CVV toggle interactivity with React state.
   */
  const [cvvHidden, setCvvHidden] = useState(true);
  const cvvValue = "920";
  const [copied, setCopied] = useState({ number: false, expiry: false });

  function handleCopy(text, type) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1200);
    });
  }

  return (
    <section className={styles.detailsBlock} role="region" aria-label="Card details">
      {/* Card number row */}
      <div className={styles.detailsRow}>
        <div className={styles.col}>
          <div className={styles.typo62}>Card number</div>
          <div className={styles.typo71}>9876543210123453</div>
        </div>
        <button
          className={styles.iconBtn}
          aria-label={copied.number ? "Copied!" : "Copy number"}
          title={copied.number ? "Copied!" : "Copy number"}
          onClick={() => handleCopy("9876543210123453", "number")}
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
            <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
          </svg>
        </button>
      </div>
      <div className={styles.divider} />

      {/* Expiry row */}
      <div className={styles.detailsRow}>
        <div className={styles.col}>
          <div className={styles.typo62}>Expiry</div>
          <div className={styles.typo71}>09/30</div>
        </div>
        <button
          className={styles.iconBtn}
          aria-label={copied.expiry ? "Copied!" : "Copy expiry"}
          title={copied.expiry ? "Copied!" : "Copy expiry"}
          onClick={() => handleCopy("09/30", "expiry")}
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
            <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
          </svg>
        </button>
      </div>
      <div className={styles.divider} />

      {/* CVV row */}
      <div className={styles.detailsRow}>
        <div className={styles.col}>
          <div className={styles.typo62}>Security code (CVV)</div>
          <div className={styles.typo52} aria-live="polite">{cvvHidden ? "***" : cvvValue}</div>
        </div>
        <button
          className={styles.iconBtn}
          aria-label={cvvHidden ? "Show CVV" : "Hide CVV"}
          title={cvvHidden ? "Show CVV" : "Hide CVV"}
          onClick={() => setCvvHidden(h => !h)}
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" stroke="#42794a" fill="none"/>
            {!cvvHidden && <circle cx="12" cy="12" r="2" fill="#42794a"></circle>}
            {cvvHidden && <line x1="3" y1="3" x2="21" y2="21" stroke="#42794a"></line>}
          </svg>
        </button>
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
export function PaginationDots() {
  /** Dots indicator for card paging */
  return (
    <div className={styles.row} style={{ width: 32, height: 4, gap: 8, margin: '12px auto 0' }} aria-label="pagination indicator" aria-hidden="true">
      <div style={{ width: 4, height: 4, background: "#dddddd", borderRadius: 20 }}></div>
      <div style={{ width: 16, height: 4, background: "#61ce70", borderRadius: 20 }}></div>
      <div style={{ width: 4, height: 4, background: "#dddddd", borderRadius: 20 }}></div>
    </div>
  );
}

// PUBLIC_INTERFACE
export function BottomNav() {
  /** Bottom navigation bar for the main app. */
  return (
    <nav className={styles.bottomNav} aria-label="Bottom navigation">
      <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
        <span className={styles.iconBtn} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12l9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" stroke="#94ca9c" fill="none" />
          </svg>
        </span>
        <div className={styles.typo66} style={{ color: '#94ca9c' }}>Home</div>
      </div>
      <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
        <span className={styles.iconBtn} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="#ffffff" fill="none" />
          </svg>
        </span>
        <div className={styles.typo65}>Bank</div>
      </div>
      <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
        <span className={styles.iconBtn} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#94ca9c" fill="none" />
            <path d="M8 12h8" stroke="#94ca9c" />
          </svg>
        </span>
        <div className={styles.typo66} style={{ color: '#94ca9c' }}>History</div>
      </div>
      <div className={`${styles.col} ${styles.center}`} style={{ gap: 4, width: 90 }}>
        <span className={styles.iconBtn} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="10" r="4" fill="#ffffff" />
            <path d="M6 18c3-4 9-4 12 0" stroke="#ffffff" fill="none" />
            <circle cx="12" cy="12" r="10" stroke="#ffffff" fill="none" />
          </svg>
        </span>
        <div className={styles.typo65}>Profile</div>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
export default function CardsScreen() {
  /**
   * Main CardsScreen component for "My Cards" feature.
   * Implements Figma-pixel-perfect layout, tab state, and interaction.
   */
  const [activeTab, setActiveTab] = useState('cards');
  // In a real app, the tab switch could route.
  return (
    <div className={styles.pageBg}>
      <main className={styles.figmaCanvas} role="main" aria-label="My cards screen">
        <StatusBar />
        <section className={styles.headerArea} aria-label="Section navigation/CTA">
          {/* Back Button */}
          <button className={styles.backBtn} aria-label="Back" type="button" tabIndex={0}>
            <span className={styles.visuallyHidden}>Back</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="14,6 8,12 14,18" fill="none" stroke="#42794a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Title */}
          <div className={styles.title}>
            <div className={styles.typo67}>Bank</div>
          </div>
          {/* TabBar */}
          <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
          {/* Add Card CTA */}
          <button className={styles.addCardBtn} type="button">
            <div className={`${styles.row} ${styles.center}`} style={{ gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10.5" fill="none" stroke="#ffffff" strokeWidth="1" />
                <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff" strokeWidth="1" />
                <line x1="7" y1="12" x2="17" y2="12" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <span className={styles.typo65}>Add new card</span>
            </div>
          </button>
          {/* Content */}
          <div className={styles.contentStack}>
            <div className={styles.typo62} style={{ height: 14 }}>My cards</div>
            <HeroCard />
            <CardDetails />
            <PaginationDots />
          </div>
        </section>
        <BottomNav />
      </main>
    </div>
  );
}
