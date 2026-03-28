// components/modal/ModalCard.js — Floating card container for modals

import { COLORS, TRANSITION } from '../../theme/tokens';

export const ModalCard = ({ children, width = 360 }) => (
  <div
    onClick={e => e.stopPropagation()}
    style={{
      background: `linear-gradient(160deg, ${COLORS.surfaceAlt} 0%, ${COLORS.surface} 100%)`,
      border: `1px solid rgba(255,255,255,0.1)`,
      borderRadius: '16px',
      padding: '28px',
      width,
      boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
      animation: `slideUp ${TRANSITION.spring}`,
    }}
  >
    {children}
  </div>
);
