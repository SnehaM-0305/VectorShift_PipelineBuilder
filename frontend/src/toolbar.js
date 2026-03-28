// toolbar.js — Top palette bar; composed from BrandLogo + NodeCategoryGroup

import {
  TbArrowUpFromArc, TbArrowDownToArc, TbBrain, TbFileText,
  TbFilter, TbTransform, TbWorld, TbGitMerge, TbGitBranch,
} from 'react-icons/tb';
import { NODE_COLORS }         from './theme/tokens';
import { BrandLogo }           from './components/toolbar/BrandLogo';
import { NodeCategoryGroup }   from './components/toolbar/NodeCategoryGroup';

// ─── Node catalog data ────────────────────────────────────────────────────────
const NODE_CATALOG = [
  {
    category: 'I/O',
    nodes: [
      { type: 'customInput',  label: 'Input',  icon: <TbArrowUpFromArc />,  color: NODE_COLORS.customInput  },
      { type: 'customOutput', label: 'Output', icon: <TbArrowDownToArc />, color: NODE_COLORS.customOutput },
    ],
  },
  {
    category: 'AI',
    nodes: [
      { type: 'llm',       label: 'LLM',       icon: <TbBrain />,    color: NODE_COLORS.llm  },
    ],
  },
  {
    category: 'Data',
    nodes: [
      { type: 'text',      label: 'Text',      icon: <TbFileText />,  color: NODE_COLORS.text      },
      { type: 'filter',    label: 'Filter',    icon: <TbFilter />,    color: NODE_COLORS.filter    },
      { type: 'transform', label: 'Transform', icon: <TbTransform />, color: NODE_COLORS.transform },
      { type: 'merge',     label: 'Merge',     icon: <TbGitMerge />,  color: NODE_COLORS.merge     },
    ],
  },
  {
    category: 'Logic',
    nodes: [
      { type: 'condition', label: 'Condition',   icon: <TbGitBranch />, color: NODE_COLORS.condition },
      { type: 'api',       label: 'API Request', icon: <TbWorld />,     color: NODE_COLORS.api       },
    ],
  },
];

// ─── Toolbar ──────────────────────────────────────────────────────────────────
export const PipelineToolbar = () => (
  <div style={toolbarStyle}>
    <BrandLogo />
    <NodePalette />
  </div>
);

// ─── Scrollable palette of all node categories ────────────────────────────────
const NodePalette = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, overflowX: 'auto' }}>
    {NODE_CATALOG.map(({ category, nodes }) => (
      <NodeCategoryGroup key={category} category={category} nodes={nodes} />
    ))}
  </div>
);

// ─── Styles ───────────────────────────────────────────────────────────────────
const toolbarStyle = {
  display:        'flex',
  alignItems:     'center',
  gap:            '20px',
  padding:        '0 24px',
  height:         '64px',
  background:     'rgba(15,19,32,0.98)',
  borderBottom:   '1px solid rgba(255,255,255,0.06)',
  backdropFilter: 'blur(12px)',
  overflowX:      'auto',
  flexShrink:     0,
};
