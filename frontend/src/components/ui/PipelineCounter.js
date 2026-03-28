// components/ui/PipelineCounter.js — Shows live node/edge count in footer

import { COLORS } from '../../theme/tokens';

export const PipelineCounter = ({ nodeCount, edgeCount }) => (
  <span style={{ color: COLORS.textDim, fontSize: '12px', userSelect: 'none' }}>
    {nodeCount} node{nodeCount !== 1 ? 's' : ''}
    <span style={{ margin: '0 6px', opacity: 0.4 }}>·</span>
    {edgeCount} edge{edgeCount !== 1 ? 's' : ''}
  </span>
);
