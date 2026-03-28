// components/ui/NodeTextarea.js — Styled <textarea> for use inside nodes

import { COLORS, FONT, TRANSITION } from '../../theme/tokens';

export const NodeTextarea = ({ style, ...props }) => (
  <textarea
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
      resize: 'none',
      fontFamily: FONT.mono,
      lineHeight: '1.5',
      transition: `border-color ${TRANSITION.normal}`,
      ...style,
    }}
    onFocus={e => (e.target.style.borderColor = `${COLORS.brand}80`)}
    onBlur={e => (e.target.style.borderColor = COLORS.inputBorder)}
  />
);
