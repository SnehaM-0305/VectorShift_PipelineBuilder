// mergeNode.js — Merge two data streams into one

import { useState } from 'react';
import { TbGitMerge } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeSelect } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [strategy, setStrategy] = useState(data?.strategy || 'Concatenate');

  return (
    <BaseNode
      id={id}
      title="Merge"
      icon={<TbGitMerge size={14} color={NODE_COLORS.merge} />}
      color={NODE_COLORS.merge}
      inputs={[
        { id: 'input1', label: 'stream A', style: { top: '38%' } },
        { id: 'input2', label: 'stream B', style: { top: '62%' } },
      ]}
      outputs={[{ id: 'output', label: 'merged' }]}
    >
      <NodeField label="Strategy">
        <NodeSelect value={strategy} onChange={e => setStrategy(e.target.value)}>
          <option value="Concatenate">Concatenate</option>
          <option value="Merge Objects">Merge Objects</option>
          <option value="Zip Arrays">Zip Arrays</option>
          <option value="First Non-null">First Non-null</option>
        </NodeSelect>
      </NodeField>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(132,204,22,0.06)',
        border: '1px solid rgba(132,204,22,0.15)',
        borderRadius: '6px',
        padding: '6px 10px',
      }}>
        <span style={{ color: '#a3e635', fontSize: '10px' }}>A + B → merged output</span>
      </div>
    </BaseNode>
  );
};
