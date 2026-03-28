// components/modal/ModalOverlay.js — Full-screen dark backdrop for modals

import { Z } from '../../theme/tokens';

export const ModalOverlay = ({ onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.72)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: Z.modal,
      animation: 'fadeIn 0.2s ease',
    }}
  >
    {children}
  </div>
);
