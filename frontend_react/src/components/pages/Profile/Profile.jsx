import React, { useState } from 'react';
import styles from './Profile.module.css';

/**
 * PUBLIC_INTERFACE
 * Profile page component converted from static HTML/CSS.
 * - Uses Ocean Professional theme tokens
 * - Interactivity:
 *    - Toggle balance visibility
 *    - Copy UPI ID to clipboard with feedback
 * - Uses images from /assets/figmaimages (served from project assets folder)
 */
export default function Profile() {
  // State for balance visibility and copy feedback
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiId = '8778214386@qpay';
  const fullBalance = '₹2,36,000.47';

  // PUBLIC_INTERFACE
  const toggleBalance = () => {
    setBalanceHidden((prev) => !prev);
  };

  // PUBLIC_INTERFACE
  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // No-op fallback
      console.warn('Clipboard not available');
    }
  };

  return (
    <div className={styles.pageBg}>
      <main className={styles.figmaCanvas} role="main" aria-label="Profile screen">

        {/* Status bar */}
        <div className={styles.statusBar} aria-hidden="true">
          <div className={styles.typo61}>10:48</div>
          <div className={styles.row} style={{ gap: 12 }}>
            <div className={styles.iconBtn} title="Wi-Fi">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path className={styles.iconStrokeDark} strokeWidth="1" d="M1 5c3-3 9-3 12 0M3 7c2-2 6-2 8 0M5 9c1-1 3-1 4 0"></path>
                <circle cx="7" cy="11" r="1.2" fill="#252525"></circle>
              </svg>
            </div>
            <div className={styles.iconBtn} title="Battery">
              <svg width="14" height="14" viewBox="0 0 16 14" aria-hidden="true">
                <rect x="1" y="3" width="12" height="8" stroke="#252525" fill="none" strokeWidth="1"></rect>
                <rect x="13.5" y="5" width="1.5" height="4" fill="#252525"></rect>
              </svg>
            </div>
          </div>
        </div>

        {/* Content area */}
        <section className={styles.sectionWrap}>
          <div className={styles.innerCol}>

            {/* Profile Header Card */}
            <div className={`${styles.cardSurface128} ${styles.row}`} style={{ width: 328, height: 96, padding: 16, gap: 8 }}>
              <div className={styles.row} style={{ alignItems: 'center', gap: 12, width: 230, height: 64 }}>
                <div className={styles.avatar64}>
                  <img src="/assets/figmaimages/figma_image_1_361.png" width="64" height="64" alt="User avatar" />
                </div>
                <div className={styles.col} style={{ gap: 4 }}>
                  <div className={styles.typo52}>Thomas Shelby</div>
                  <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                    <div className={styles.iconBtn} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path d="M1 3 L7 13" stroke="#0e8635" strokeWidth="2"></path>
                        <path d="M3 3 L9 13" stroke="#e97208" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className={styles.typo75} id="upi-id">{upiId}</div>
                    <button
                      className={styles.iconBtn}
                      id="copy-upi"
                      onClick={copyUpi}
                      aria-label={copied ? 'Copied!' : 'Copy UPI ID'}
                      title={copied ? 'Copied!' : 'Copy'}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                        <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
                        <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className={styles.iconBtn} aria-label="Settings" title="Settings" style={{ marginLeft: 'auto' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#aaaaaa" fill="none"></path>
                  <path d="M19 12l2-1-2-1-1-2 1-2-2 1-2-1-1-2-1 2-2 1-2-1 1 2-1 2-2 1 2 1 1 2-1 2 2-1 2 1 1 2 1-2 2-1 2 1-1-2 1-2Z" stroke="#aaaaaa" fill="none"></path>
                </svg>
              </button>
            </div>

            {/* Wallet balance row */}
            <div className={`${styles.cardOutline34} ${styles.row}`} style={{ marginTop: 12, width: 328, height: 66, alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
              <div className={styles.col} style={{ gap: 4 }}>
                <div className={styles.typo62}>Wallet balance</div>
                <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                  <div className={styles.typo76} id="wallet-amount">{balanceHidden ? '••••••••••••' : fullBalance}</div>
                  <button
                    className={styles.iconBtn}
                    id="toggle-balance"
                    onClick={toggleBalance}
                    aria-label={balanceHidden ? 'Show balance' : 'Hide balance'}
                    title={balanceHidden ? 'Show balance' : 'Hide balance'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" stroke="#252525" fill="none"></path>
                      {balanceHidden && <line x1="3" y1="3" x2="21" y2="21" stroke="#252525"></line>}
                    </svg>
                  </button>
                </div>
              </div>
              <button className={styles.chipOutline}>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="#42794a" fill="none"></circle>
                  <line x1="12" y1="7" x2="12" y2="17" stroke="#42794a"></line>
                  <line x1="7" y1="12" x2="17" y2="12" stroke="#42794a"></line>
                </svg>
                <span className={styles.typo72}>Add money</span>
              </button>
            </div>

            {/* Receiving money in */}
            <div className={`${styles.cardOutline34} ${styles.col} ${styles.receivingMoney}`} style={{ marginTop: 12, width: 328, padding: 16, gap: 12 }}>
              <div className={styles.col} style={{ gap: 8 }}>
                <div className={styles.typo62}>Receiving money in</div>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center' }}>
                  <img src="/assets/figmaimages/figma_image_1_393.png" width="24" height="24" alt="Bank logo" />
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo77}>xxxx 3941</div>
                    <div className={styles.typo62}>State Bank of India</div>
                  </div>
                </div>
              </div>
              <div className={`${styles.row} ${styles.receivingMoneyCta}`}>
                <button className={`${styles.chipOutline} ${styles.receivingMoneyManageBtn}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="#42794a" fill="none"></circle>
                    <polyline points="9,12 11,14 15,10" stroke="#42794a" fill="none"></polyline>
                  </svg>
                  <span className={styles.typo72}>Manage</span>
                </button>
              </div>
              <div className={styles.row} style={{ borderTop: '1px solid var(--color-eeeeee)', marginTop: 4, paddingTop: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M1 3 L7 13" stroke="#0e8635" strokeWidth="2"></path>
                      <path d="M3 3 L9 13" stroke="#e97208" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className={styles.typo62}>{upiId}</div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true" title="Copy">
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    <rect x="3" y="5" width="9" height="9" rx="2" stroke="#42794a" fill="none"></rect>
                    <rect x="6" y="2" width="7" height="7" rx="2" stroke="#42794a" fill="none"></rect>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bank accounts carousel mimic */}
            <div className={`${styles.cardOutline34} ${styles.col}`} style={{ marginTop: 12, width: 328, padding: 16, gap: 12 }}>
              <div className={styles.typo62}>Bank accounts</div>
              <div className={`${styles.row} ${styles.cardsRowScroll}`} style={{ gap: 12 }}>
                <div className={`${styles.cardSurface130} ${styles.col}`} style={{ width: 176, height: 152, padding: 12, gap: 12 }}>
                  <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                    <img src="/assets/figmaimages/figma_image_1_393.png" width="24" height="24" alt="Bank logo" />
                    <div style={{ marginLeft: 'auto' }}>
                      <span className={styles.typo78} style={{ display: 'inline-block', background: '#eeeeee', borderRadius: 40, padding: '3px 8px' }}>Primary</span>
                    </div>
                  </div>
                  <div className={styles.col} style={{ gap: 4 }}>
                    <div className={styles.typo52}>State Bank of India</div>
                    <div className={styles.typo62}>xxxx 3941</div>
                  </div>
                  <button className={styles.chipOutline} style={{ width: 'fit-content' }}>
                    <span className={styles.typo72}>Check balance</span>
                    <span className={styles.chevRight} aria-hidden="true"></span>
                  </button>
                </div>

                <div className={`${styles.cardSurface130} ${styles.col}`} style={{ width: 176, height: 152, padding: 12, gap: 12 }}>
                  <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                    <div style={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/assets/figmaimages/figma_image_1_430.png" width="24" height="20" alt="Bank logo" />
                    </div>
                  </div>
                  <div className={styles.col} style={{ gap: 4 }}>
                    <div className={styles.typo52}>State Bank of India</div>
                    <div className={styles.typo62}>xxxx 3941</div>
                  </div>
                  <button className={styles.chipOutline} style={{ width: 'fit-content' }}>
                    <span className={styles.typo72}>Check balance</span>
                    <span className={styles.chevRight} aria-hidden="true"></span>
                  </button>
                </div>

                <div className={`${styles.cardSurface130} ${styles.col}`} style={{ width: 176, height: 152, padding: 12, gap: 12, border: '1px solid var(--color-42794a)' }}>
                  <div className={`${styles.col} ${styles.center}`} style={{ gap: 8, height: 64 }}>
                    <div className={styles.iconBtn} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="#42794a" fill="none"></circle>
                        <line x1="12" y1="7" x2="12" y2="17" stroke="#42794a"></line>
                        <line x1="7" y1="12" x2="17" y2="12" stroke="#42794a"></line>
                      </svg>
                    </div>
                    <div className={styles.typo79} style={{ textAlign: 'center' }}>Add new Bank account</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Protection */}
            <div className={`${styles.cardOutline34} ${styles.col}`} style={{ marginTop: 12, width: 328, padding: 16, gap: 12 }}>
              <div className={styles.row} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.typo62}>Security & Protection</div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight} style={{ transform: 'rotate(-45deg)', borderColor: '#aaaaaa' }}></span></div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5-7 9-7 9s-7-4-7-9V6l7-4z" stroke="#999999" fill="none"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Screen lock</div>
                    <div className={styles.typo62}>Biometric & Screen Locks</div>
                  </div>
                </div>
                <div className={styles.row} style={{ gap: 8, alignItems: 'center' }}>
                  <div style={{ width: 24, height: 14, background: '#eeeeee', border: '1px solid #dddddd', borderRadius: 10, position: 'relative' }}>
                    <div style={{ width: 10, height: 10, background: '#61ce70', borderRadius: 10, position: 'absolute', left: 12, top: 1 }}></div>
                  </div>
                </div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12, marginTop: 8 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14" stroke="#999999" fill="none"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Change password</div>
                    <div className={styles.typo62}>Reset your app password</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>
            </div>

            {/* Settings & Preferences */}
            <div className={`${styles.cardOutline34} ${styles.col}`} style={{ marginTop: 12, width: 328, padding: 16, gap: 12 }}>
              <div className={styles.row} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.typo62}>Settings & Preferences</div>
                <div className={styles.row} style={{ gap: 16 }}>
                  <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight} style={{ transform: 'rotate(-45deg)', borderColor: '#aaaaaa' }}></span></div>
                  <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
                </div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="8" cy="8" r="3" stroke="#999999" fill="none"></circle>
                      <circle cx="16" cy="16" r="4" stroke="#999999" fill="none"></circle>
                      <line x1="1" y1="12" x2="11" y2="12" stroke="#999999"></line>
                      <line x1="13" y1="8" x2="23" y2="8" stroke="#999999"></line>
                    </svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Languages</div>
                    <div className={styles.typo62}>Choose language: English</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12, marginTop: 8 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#999999" fill="none"></rect><path d="M8 12h8M8 16h6" stroke="#999999"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Permissions</div>
                    <div className={styles.typo62}>Manage data sharing settings</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>
            </div>

            {/* Help & Support */}
            <div className={`${styles.cardOutline34} ${styles.col}`} style={{ marginTop: 12, width: 328, padding: 16, gap: 12 }}>
              <div className={styles.row} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.typo62}>Help & Support</div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight} style={{ transform: 'rotate(-45deg)', borderColor: '#aaaaaa' }}></span></div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#999999" fill="none"></circle><path d="M4 20c2-3 6-4 8-4s6 1 8 4" stroke="#999999" fill="none"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Help</div>
                    <div className={styles.typo62}>Biometric & Screen Locks</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12, marginTop: 8 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 21v-8l7-10 7 10v8h-5v-6H10v6z" stroke="#999999" fill="none"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Report fraud</div>
                    <div className={styles.typo62}>Reset your app password</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>

              <div className={`${styles.cardSurface130} ${styles.row}`} style={{ width: '100%', height: 58, alignItems: 'center', padding: 12, marginTop: 8 }}>
                <div className={styles.row} style={{ gap: 12, alignItems: 'center', flex: 1 }}>
                  <div className={styles.iconBtn} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#999999" fill="none"></circle><path d="M8 12h8M12 8v8" stroke="#999999"></path></svg>
                  </div>
                  <div className={styles.col} style={{ gap: 2 }}>
                    <div className={styles.typo52}>Privacy policy</div>
                    <div className={styles.typo62}>Reset your app password</div>
                  </div>
                </div>
                <div className={styles.iconBtn} aria-hidden="true"><span className={styles.chevRight}></span></div>
              </div>
            </div>

            {/* Logout pill */}
            <div className={styles.cardOutline34} style={{ marginTop: 12, width: 328, height: 80, padding: 16 }}>
              <div className={`${styles.cardSurface135} ${styles.row} ${styles.center}`} style={{ width: 296, height: 48, margin: '0 auto', gap: 12 }}>
                <div className={styles.iconBtn} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" stroke="#ffffff" fill="none"></path>
                    <path d="M17 8l5 4-5 4M22 12H10" stroke="#ffffff" fill="none"></path>
                  </svg>
                </div>
                <div className={styles.typo80}>Logout</div>
              </div>
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
                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#94ca9c" fill="none"></rect>
              </svg>
            </div>
            <div className={styles.typo66} style={{ color: '#94ca9c' }}>Bank</div>
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
                <circle cx="12" cy="12" r="10" stroke="#ffffff" fill="none"></circle>
                <circle cx="12" cy="10" r="4" fill="#ffffff"></circle>
                <path d="M6 18c3-4 9-4 12 0" stroke="#ffffff" fill="none"></path>
              </svg>
            </div>
            <div className={styles.typo65}>Profile</div>
          </div>
        </nav>
      </main>
    </div>
  );
}
