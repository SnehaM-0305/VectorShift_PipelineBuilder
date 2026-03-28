// components/ui/NodeInput.js — Styled text input for use inside nodes

import { COLORS, FONT, TRANSITION } from '../../theme/tokens';

export const NodeInput = ({ style, ...props }) => (
  <input
    {...props}
    style={{
      background: COLORS.inputBg,
      border: `1px solid ${COLORS.inputBorder}`,
      borderRadius: '6px',
      color: COLORS.textPrimary,
      padding: '6px 10px',
      fontSize: '12px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      transition: `border-color ${TRANSITION.normal}`,
      fontFamily: FONT.sans,
      ...style,
    }}
    onFocus={e => (e.target.style.borderColor = `${COLORS.brand}80`)}
    onBlur={e => (e.target.style.borderColor = COLORS.inputBorder)}
  />
);
