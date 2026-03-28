// components/node/NodeHandle.js

import { Handle, Position } from 'reactflow';
import { COLORS } from '../../theme/tokens';

const labelBox = {
  position: 'absolute',
  fontSize: '9px',
  fontWeight: '600',
  color: COLORS.textMuted,
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  zIndex: 3,
  lineHeight: 1.2,
  maxWidth: '42px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '2px 4px',
  borderRadius: '4px',
  background: 'rgba(10,13,20,0.92)',
  border: `1px solid ${COLORS.border}`,
  boxShadow: '0 1px 4px rgba(0,0,0,0.45)',
};

export const NodeHandle = ({ nodeId, handle, type, color }) => {
  const side = type === 'target' ? 'left' : 'right';
  const top = handle.style?.top ?? '50%';

  return (
    <>
      {handle.label && (
        <span
          style={{
            ...labelBox,
            top,
            transform: 'translateY(-50%)',
            ...(side === 'left'
              ? { left: '10px', textAlign: 'left' }
              : { right: '10px', textAlign: 'right' }),
            ...handle.labelStyle,
          }}
        >
          {handle.label}
        </span>
      )}
      <Handle
        type={type}
        position={handle.position || (type === 'target' ? Position.Left : Position.Right)}
        id={`${nodeId}-${handle.id}`}
        style={{
          background: handle.color || color,
          border: `2px solid ${COLORS.surfaceDark}`,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          transition: 'transform 0.15s, box-shadow 0.15s',
          zIndex: 2,
          top,
          ...handle.style,
        }}
      />
    </>
  );
};
