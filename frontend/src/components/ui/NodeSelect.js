// components/ui/NodeSelect.js — Styled <select> dropdown for use inside nodes

import { COLORS, FONT } from '../../theme/tokens';

const CHEVRON_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;

export const NodeSelect = ({ style, children, ...props }) => (
  <select
    {...props}
    style={{
      background: COLORS.inputBg,
      border: `1px solid ${COLORS.inputBorder}`,
      borderRadius: '6px',
      color: COLORS.textPrimary,
      padding: '6px 28px 6px 10px',
      fontSize: '12px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontFamily: FONT.sans,
      appearance: 'none',
      backgroundImage: CHEVRON_SVG,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 8px center',
      ...style,
    }}
  >
    {children}
  </select>
);
