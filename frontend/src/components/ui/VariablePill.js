// components/ui/VariablePill.js — Badge shown for each {{variable}} in TextNode

import { COLORS, FONT } from '../../theme/tokens';

export const VariablePill = ({ name }) => (
  <span
    style={{
      background: `${COLORS.text ?? '#3b82f6'}22`,
      border: '1px solid rgba(59,130,246,0.3)',
      borderRadius: '4px',
      color: '#93c5fd',
      fontSize: '10px',
      padding: '1px 6px',
      fontFamily: FONT.mono,
    }}
  >
    {`{{${name}}}`}
  </span>
);

// ─── Row of pills ─────────────────────────────────────────────────────────────
export const VariablePillRow = ({ variables }) => {
  if (!variables.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '2px' }}>
      {variables.map(v => <VariablePill key={v} name={v} />)}
    </div>
  );
};
