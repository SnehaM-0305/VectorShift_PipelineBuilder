// components/modal/StatCard.js — Single metric display card (nodes / edges count)

import { COLORS, FONT } from '../../theme/tokens';

export const StatCard = ({ icon, label, value, color }) => (
  <div
    style={{
      background: `${color}08`,
      border: `1px solid ${color}22`,
      borderRadius: '10px',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    }}
  >
    <StatCardHeader icon={icon} label={label} />
    <StatCardValue value={value} />
  </div>
);

const StatCardHeader = ({ icon, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    {icon}
    <span
      style={{
        color: COLORS.textMuted,
        fontSize: '11px',
        fontWeight: '500',
        fontFamily: FONT.sans,
      }}
    >
      {label}
    </span>
  </div>
);

const StatCardValue = ({ value }) => (
  <span
    style={{
      color: COLORS.textPrimary,
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: 1,
      fontFamily: FONT.sans,
    }}
  >
    {value}
  </span>
);
