// components/node/NodeHeader.js — Icon badge + title strip at the top of every node

import { COLORS, FONT } from '../../theme/tokens';

export const NodeHeader = ({ icon, title, color }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px 9px',
      borderBottom: `1px solid ${COLORS.borderLight}`,
      background: `linear-gradient(90deg, ${color}12 0%, transparent 60%)`,
      borderRadius: '9px 9px 0 0',
    }}
  >
    <NodeIconBadge icon={icon} color={color} />
    <NodeTitle title={title} />
  </div>
);

// ── Icon badge ───────────────────────────────────────────────────────────────
const NodeIconBadge = ({ icon, color }) => (
  <div
    style={{
      width: '26px',
      height: '26px',
      borderRadius: '7px',
      background: `${color}22`,
      border: `1px solid ${color}44`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {icon}
  </div>
);

// ── Title text ────────────────────────────────────────────────────────────────
const NodeTitle = ({ title }) => (
  <span
    style={{
      color: COLORS.textPrimary,
      fontWeight: '600',
      fontSize: '13px',
      letterSpacing: '0.01em',
      fontFamily: FONT.sans,
    }}
  >
    {title}
  </span>
);
