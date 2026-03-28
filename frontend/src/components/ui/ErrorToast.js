// components/ui/ErrorToast.js — Floating error notification toast

import { TbAlertTriangle, TbX } from 'react-icons/tb';
import { COLORS, Z } from '../../theme/tokens';

export const ErrorToast = ({ message, onClose }) => (
  <div
    role="alert"
    style={{
      position: 'fixed',
      bottom: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(239,68,68,0.14)',
      border: `1px solid rgba(239,68,68,0.3)`,
      borderRadius: '10px',
      padding: '12px 16px',
      color: '#fca5a5',
      fontSize: '13px',
      zIndex: Z.toast,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      whiteSpace: 'nowrap',
      animation: 'fadeIn 0.2s ease',
    }}
  >
    <TbAlertTriangle size={16} color={COLORS.danger} style={{ flexShrink: 0 }} />
    <span>{message}</span>
    <button
      onClick={onClose}
      aria-label="Dismiss"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#94a3b8',
        marginLeft: '6px',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <TbX size={14} />
    </button>
  </div>
);
