// components/ui/CloseButton.js — Icon-only close/dismiss button

import { TbX } from 'react-icons/tb';
import { COLORS, TRANSITION } from '../../theme/tokens';

export const CloseButton = ({ onClick, size = 16 }) => (
  <button
    onClick={onClick}
    aria-label="Close"
    style={{
      background: 'rgba(255,255,255,0.06)',
      border: `1px solid ${COLORS.inputBorder}`,
      borderRadius: '8px',
      color: '#94a3b8',
      cursor: 'pointer',
      padding: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `background ${TRANSITION.normal}`,
      flexShrink: 0,
    }}
    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
  >
    <TbX size={size} />
  </button>
);
