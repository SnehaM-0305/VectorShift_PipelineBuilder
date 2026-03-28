// components/modal/ModalHeader.js — Icon + title + close button row

import { TbSend } from 'react-icons/tb';
import { CloseButton } from '../ui/CloseButton';
import { COLORS, FONT } from '../../theme/tokens';

export const ModalHeader = ({ onClose }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    }}
  >
    <ModalTitleGroup />
    <CloseButton onClick={onClose} />
  </div>
);

// ── Left side: gradient icon badge + title/subtitle ───────────────────────────
const ModalTitleGroup = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <ModalIconBadge />
    <ModalTitleText />
  </div>
);

const ModalIconBadge = () => (
  <div
    style={{
      width: '36px',
      height: '36px',
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${COLORS.brand}, ${COLORS.brandAlt})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <TbSend size={18} color="#ffffff" />
  </div>
);

const ModalTitleText = () => (
  <div>
    <div
      style={{
        color: COLORS.textPrimary,
        fontWeight: '700',
        fontSize: '16px',
        fontFamily: FONT.sans,
      }}
    >
      Pipeline Analysis
    </div>
    <div style={{ color: COLORS.textMuted, fontSize: '11px' }}>
      Submitted successfully
    </div>
  </div>
);
