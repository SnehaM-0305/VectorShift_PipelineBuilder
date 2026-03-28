// components/toolbar/BrandLogo.js — VectorShift logo mark + wordmark

import { COLORS, FONT } from '../../theme/tokens';

// ── SVG layer-stack logo ───────────────────────────────────────────────────────
const LogoMark = () => (
  <div
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      background: `linear-gradient(135deg, ${COLORS.brand}, ${COLORS.brandAlt})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"  stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5"             stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5"             stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  </div>
);

// ── Wordmark ──────────────────────────────────────────────────────────────────
const Wordmark = () => (
  <div>
    <div
      style={{
        color: COLORS.textPrimary,
        fontWeight: '700',
        fontSize: '14px',
        letterSpacing: '-0.01em',
        fontFamily: FONT.sans,
        lineHeight: 1.2,
      }}
    >
      VectorShift
    </div>
    <div style={{ color: COLORS.textMuted, fontSize: '10px', fontFamily: FONT.sans }}>
      Pipeline Builder
    </div>
  </div>
);

// ── Divider between brand and node palette ────────────────────────────────────
const BrandDivider = () => (
  <div
    style={{
      width: '1px',
      height: '32px',
      background: 'rgba(255,255,255,0.06)',
      marginLeft: '0',
    }}
  />
);

// ── Public component ──────────────────────────────────────────────────────────
export const BrandLogo = () => (
  <>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        paddingRight: '20px',
      }}
    >
      <LogoMark />
      <Wordmark />
    </div>
    <BrandDivider />
  </>
);
