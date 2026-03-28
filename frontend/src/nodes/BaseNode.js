// nodes/BaseNode.js — Core node wrapper; composed from sub-components
// Re-exports shared primitives so individual node files have one import point.

import { COLORS, FONT } from '../theme/tokens';
import { NodeHeader } from '../components/node/NodeHeader';
import { NodeHandle } from '../components/node/NodeHandle';
import { NodeBody }   from '../components/node/NodeBody';

// ─── Re-exports ───────────────────────────────────────────────────────────────
// Node files import these from here for a single, clean import statement.
export { NODE_COLORS }        from '../theme/tokens';
export { NodeField }          from '../components/ui/NodeField';
export { NodeInput }          from '../components/ui/NodeInput';
export { NodeSelect }         from '../components/ui/NodeSelect';
export { NodeTextarea }       from '../components/ui/NodeTextarea';

// ─── BaseNode ─────────────────────────────────────────────────────────────────
// Props:
//   id       — ReactFlow node id
//   title    — header title string
//   icon     — React icon element
//   color    — accent color (border + header tint + handle color)
//   inputs   — [{ id, label?, position?, style?, color? }]
//   outputs  — [{ id, label?, position?, style?, color? }]
//   children — fields / body content
//   style                  — extra overrides for the outer container
//   bodyPaddingBottomExtra — extra px below body (e.g. Text node with many {{vars}})
export const BaseNode = ({
  id,
  title,
  icon,
  color = COLORS.brand,
  inputs  = [],
  outputs = [],
  children,
  style = {},
  bodyPaddingBottomExtra = 0,
}) => (
  <div style={containerStyle(color, style)}>
    <NodeHeader icon={icon} title={title} color={color} />

    <NodeBody
      hasLeftHandles={inputs.length > 0}
      hasRightHandles={outputs.length > 0}
      paddingBottomExtra={bodyPaddingBottomExtra}
    >
      {children}
    </NodeBody>

    {inputs.map(handle => (
      <NodeHandle key={handle.id} nodeId={id} handle={handle} type="target" color={color} />
    ))}

    {outputs.map(handle => (
      <NodeHandle key={handle.id} nodeId={id} handle={handle} type="source" color={color} />
    ))}
  </div>
);

// ─── Container style ──────────────────────────────────────────────────────────
const containerStyle = (color, extra) => ({
  background: `linear-gradient(160deg, ${COLORS.surfaceAlt} 0%, ${COLORS.surfaceDark} 100%)`,
  border:     `1px solid ${COLORS.border}`,
  borderTop:  `3px solid ${color}`,
  borderRadius: '12px',
  boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 20px ${color}18`,
  overflow: 'visible',
  fontFamily: FONT.sans,
  minWidth: '220px',
  position: 'relative',
  ...extra,
});
