// components/toolbar/NodeCategoryGroup.js — Category label + row of draggable node pills

import { DraggableNode } from '../../draggableNode';
import { COLORS, FONT } from '../../theme/tokens';

// ── Category label (e.g. "I/O", "AI", "Data") ────────────────────────────────
const CategoryLabel = ({ name }) => (
  <span
    style={{
      color: COLORS.textDim,
      fontSize: '10px',
      fontWeight: '600',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      flexShrink: 0,
      fontFamily: FONT.sans,
      userSelect: 'none',
    }}
  >
    {name}
  </span>
);

// ── Row of draggable node pills ───────────────────────────────────────────────
const NodePillRow = ({ nodes }) => (
  <div style={{ display: 'flex', gap: '6px' }}>
    {nodes.map(node => (
      <DraggableNode key={node.type} {...node} />
    ))}
  </div>
);

// ── Public component ──────────────────────────────────────────────────────────
export const NodeCategoryGroup = ({ category, nodes }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexShrink: 0,
    }}
  >
    <CategoryLabel name={category} />
    <NodePillRow nodes={nodes} />
  </div>
);
