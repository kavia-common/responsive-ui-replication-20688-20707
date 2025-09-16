import React from 'react';
import styles from './SettleNow.module.css';

// PUBLIC_INTERFACE
export default function SettleNow() {
  /**
   * SettleNow page
   * Converted from assets/settle-now-2535-1069.html and assets/settle-now-2535-1069.css
   * - Uses Ocean Professional tokens and CSS Modules for scoping.
   * - Responsive layout for desktop down to tablet/mobile widths.
   * - Uses static assets from /assets/figmaimages served at project root.
   */

  return (
    <div className={styles.pageBg}>
      <main className={styles.desktopCanvas} role="main" aria-label="Settle now screen">
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logoCluster} aria-hidden="true">
              <svg width="55.2" height="48" viewBox="0 0 55.2 48" aria-hidden="true">
                <rect x="0" y="3.5" width="10.6" height="34.7" fill="#3c67b1"></rect>
                <rect x="13.5" y="0" width="9.0" height="35.5" fill="#3c67b1"></rect>
                <rect x="26.0" y="4" width="9.0" height="30.6" fill="#3c67b1"></rect>
                <rect x="39.0" y="3.0" width="8.8" height="14.1" fill="#f26727"></rect>
                <rect x="39.0" y="18.0" width="6.0" height="14.1" fill="#f26727"></rect>
                <rect x="47.9" y="3.0" width="6.0" height="12.2" fill="#f26727"></rect>
                <rect x="47.9" y="18.0" width="5.7" height="12.1" fill="#f26727"></rect>
              </svg>
              <div className={styles.logoTexts}>
                <div className={styles.typo83}>Pay</div>
                <div className={styles.typo84}>BUSINESS</div>
              </div>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.avatar}>
              <img src="/assets/figmaimages/figma_image_2535_1074.png" alt="User avatar" width="48" height="48" />
            </div>
            <div className={styles.greeting}>
              <div className={styles.typo75} style={{ color: 'var(--color-999999)' }}>Hello</div>
              <div className={styles.typo82}>Thomas Shelby</div>
            </div>
            <div className={styles.chevDown} aria-hidden="true">
              <svg width="12" height="6" viewBox="0 0 12 6">
                <path d="M1 1 L6 5 L11 1" stroke="#999999" strokeWidth="1.5" fill="none"></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Left Nav */}
        <aside className={styles.nav}>
          <nav className={styles.navStack}>
            <div className={`${styles.navItem} ${styles.navItemActive}`}>
              <div className={styles.navItemRow}>
                <div className={styles.navIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 10 L12 4 L20 10" stroke="#94ca9c" fill="none"></path>
                    <path d="M6 20V11h12v9" stroke="#94ca9c" fill="none"></path>
                  </svg>
                </div>
                <div className={styles.typo86} style={{ color: '#94ca9c' }}>Home</div>
              </div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navItemRow}>
                <div className={styles.navIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="6" height="6" stroke="#94ca9c" fill="none"></rect>
                    <rect x="14" y="4" width="6" height="6" stroke="#94ca9c" fill="none"></rect>
                    <rect x="4" y="14" width="6" height="6" stroke="#94ca9c" fill="none"></rect>
                  </svg>
                </div>
                <div className={styles.typo86} style={{ color: '#94ca9c' }}>QR</div>
              </div>
            </div>

            <div className={`${styles.navItem} ${styles.navItemCard}`}>
              <div className={styles.navItemRow}>
                <div className={styles.navIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="#42794a" fill="none"></circle>
                    <path d="M12 7v5l4 2" stroke="#42794a" fill="none"></path>
                  </svg>
                </div>
                <div className={styles.typo85} style={{ color: 'var(--color-42794a)' }}>History</div>
                <div className={styles.navCaret} aria-hidden="true" style={{ marginLeft: 'auto' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M5 8l5 5 5-5" stroke="#42794a" strokeWidth="1.5" fill="none"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navItemRow}>
                <div className={styles.navIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="9" r="4" stroke="#94ca9c" fill="none"></circle>
                    <path d="M6 20c3-4 9-4 12 0" stroke="#94ca9c" fill="none"></path>
                  </svg>
                </div>
                <div className={styles.typo86} style={{ color: '#94ca9c' }}>Profile</div>
              </div>
            </div>
          </nav>

          <div className={styles.navBottom}>
            <div className={styles.bharatConnect} aria-label="Bharat connect logo">
              <img src="/assets/figmaimages/figma_image_1_430.png" alt="Bharat connect" width="86" height="34" />
            </div>
          </div>
        </aside>

        {/* Content */}
        <section className={styles.content}>
          <div className={styles.contentRow}>
            <h1 className={styles.typo96}>Settlement History</h1>
            <button className={styles.btnOutline73} type="button">
              <span className={styles.typo107} style={{ color: 'var(--color-42794a)' }}>Download statement</span>
            </button>
          </div>

          <div className={styles.searchRow}>
            <div className={styles.searchBox}>
              <div className={styles.searchIcon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <circle cx="8" cy="8" r="6.5" stroke="#999999" fill="none" strokeWidth="1.5"></circle>
                  <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="#999999" strokeWidth="1.5"></line>
                </svg>
              </div>
              <div className={styles.typo90} style={{ color: 'var(--color-999999)' }}>Search</div>
            </div>

            <button className={styles.exportBtn} type="button" title="Export">
              <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
                <path d="M1 11h16M9 1v8M5 5l4-4 4 4" stroke="#ffffff" strokeWidth="2" fill="none"></path>
              </svg>
            </button>
          </div>

          <div className={styles.infoBanner}>
            <div className={styles.infoIcon} aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 34 34">
                <circle cx="17" cy="17" r="16" stroke="#42794a" fill="none" strokeWidth="2"></circle>
                <path d="M17 10v7" stroke="#42794a" strokeWidth="2"></path>
                <circle cx="17" cy="24" r="1.8" fill="#42794a"></circle>
              </svg>
            </div>
            <div className={styles.typo108} style={{ color: 'var(--color-999999)' }}>
              Today’s total collection will be auto-settled by 08:00AM, 23rd Oct’22 Tomorrow.
            </div>

            <button className={styles.settleNowBtn} type="button">
              <div className={styles.settleIcon} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path d="M4 12h6l2-3 2 6 2-3h4" stroke="#ffffff" fill="none"></path>
                </svg>
              </div>
              <span className={styles.typo94} style={{ color: '#ffffff' }}>Settle Now!</span>
            </button>
          </div>

          <div className={`${styles.table} ${styles.cardOutline34}`}>
            <div className={styles.tableHeader}>
              <div className={styles.th + ' ' + styles.typo91}>Name</div>
              <div className={styles.th + ' ' + styles.typo91}>Date & time</div>
              <div className={styles.th + ' ' + styles.typo91}>Account</div>
              <div className={styles.th + ' ' + styles.typo91}>Amount</div>
              <div className={styles.th + ' ' + styles.typo91}>Status</div>
              <div className={styles.th + ' ' + styles.typo91}>Details</div>
            </div>
            <div className={styles.rule}></div>

            {[
              { name: 'Lisa', date: '03 Sep, 2021', account: 'upi', amount: '₹1,06,023', status: 'pending' },
              { name: 'Lisa', date: '03 Sep, 2021', account: 'phonepe', amount: '₹1,023', status: 'failed' },
              { name: 'Lisa', date: '03 Sep, 2021', account: 'gpay', amount: '₹1,023', status: 'success' },
              { name: 'Lisa', date: '03 Sep, 2021', account: 'phonepe', amount: '₹1,06,023', status: 'failed' },
              { name: 'Lisa', date: '03 Sep, 2021', account: 'upi', amount: '₹1,023', status: 'failed' },
            ].map((row, idx) => (
              <React.Fragment key={idx}>
                <div className={styles.tableRow}>
                  <div className={`${styles.td} ${styles.tdName}`}>
                    <div className={styles.typo67}>Lisa</div>
                  </div>
                  <div className={styles.td}><div className={styles.typo67}>{row.date}</div></div>
                  <div className={styles.td}>
                    <div className={styles.accountChip}>
                      <span className={styles.typo90} style={{ color: 'var(--color-999999)' }}>From</span>
                      {row.account === 'upi' && (
                        <span className={styles.upiPayIcon} aria-hidden="true">
                          <svg width="24" height="14" viewBox="0 0 24 14">
                            <rect x="0" y="2" width="10" height="10" fill="#3c67b1"></rect>
                            <rect x="10" y="2" width="10" height="10" fill="#f26727"></rect>
                          </svg>
                        </span>
                      )}
                      {row.account === 'phonepe' && <span className={styles.accountIcon + ' ' + styles.phonepe} aria-hidden="true"></span>}
                      {row.account === 'gpay' && <span className={styles.accountIcon + ' ' + styles.gpay} aria-hidden="true"></span>}
                    </div>
                  </div>
                  <div className={styles.td}><div className={styles.typo109}>{row.amount}</div></div>
                  <div className={styles.td}>
                    {row.status === 'pending' && (
                      <span className={styles.badge + ' ' + styles.badgePending}><span className={styles.typo112}>Pending</span></span>
                    )}
                    {row.status === 'failed' && (
                      <span className={styles.badge + ' ' + styles.badgeFailed}><span className={styles.typo111}>Failed</span></span>
                    )}
                    {row.status === 'success' && (
                      <span className={styles.badge + ' ' + styles.badgeSuccess}><span className={styles.typo113}>Success</span></span>
                    )}
                  </div>
                  <div className={styles.td}><span className={styles.linkGreen + ' ' + styles.typo110}>View</span></div>
                </div>
                {idx < 4 && <div className={styles.rule}></div>}
              </React.Fragment>
            ))}
          </div>

          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.pageBtnChev}`} aria-label="Previous page">
              <svg width="6" height="12" viewBox="0 0 6 12" aria-hidden="true">
                <path d="M5 1L1 6l4 5" stroke="#999999" fill="none"></path>
              </svg>
            </button>
            <button className={styles.pageBtn}><span className={styles.typo115}>1</span></button>
            <button className={styles.pageBtn}><span className={styles.typo115}>2</span></button>
            <button className={styles.pageBtn}><span className={styles.typo115}>...</span></button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}><span className={styles.typo116}>7</span></button>
            <button className={styles.pageBtn}><span className={styles.typo115}>8</span></button>
            <button className={`${styles.pageBtn} ${styles.pageBtnChev}`} aria-label="Next page">
              <svg width="6" height="12" viewBox="0 0 6 12" aria-hidden="true">
                <path d="M1 1l4 5-4 5" stroke="#999999" fill="none"></path>
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
