// components/ui/PrimaryButton.js — Gradient primary action button

import { COLORS, FONT, TRANSITION } from '../../theme/tokens';

export const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  style = {},
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '10px 24px',
      width: fullWidth ? '100%' : undefined,
      background: disabled
        ? `${COLORS.brand}66`
        : `linear-gradient(90deg, ${COLORS.brand}, ${COLORS.brandAlt})`,
      border: 'none',
      borderRadius: '10px',
      color: '#ffffff',
      fontWeight: '600',
      fontSize: '14px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: FONT.sans,
      boxShadow: disabled ? 'none' : `0 4px 16px ${COLORS.brand}40`,
      transition: `opacity ${TRANSITION.normal}, transform ${TRANSITION.fast}`,
      ...style,
    }}
    onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = '0.88'; }}
    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
    onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
    onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
  >
    {children}
  </button>
);
