// components/ui/NodeField.js — Label + field wrapper for node form rows

import { COLORS, FONT } from '../../theme/tokens';

export const NodeField = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    {label && (
      <label style={{
        color: COLORS.textMuted,
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontFamily: FONT.sans,
        userSelect: 'none',
      }}>
        {label}
      </label>
    )}
    {children}
  </div>
);
