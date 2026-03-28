// filterNode.js — Filter data based on a condition expression

import { useState } from 'react';
import { TbFilter } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeInput } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [field, setField] = useState(data?.field || '');

  return (
    <BaseNode
      id={id}
      title="Filter"
      icon={<TbFilter size={14} color={NODE_COLORS.filter} />}
      color={NODE_COLORS.filter}
      inputs={[{ id: 'input', label: 'data', style: { top: '50%' } }]}
      outputs={[
        { id: 'matched', label: 'matched', color: '#10b981', style: { top: '38%' } },
        { id: 'unmatched', label: 'unmatched', color: '#ef4444', style: { top: '62%' } },
      ]}
    >
      <NodeField label="Field">
        <NodeInput
          type="text"
          value={field}
          onChange={e => setField(e.target.value)}
          placeholder="e.g. data.score"
        />
      </NodeField>
      <NodeField label="Condition">
        <NodeInput
          type="text"
          value={condition}
          onChange={e => setCondition(e.target.value)}
          placeholder="e.g. > 0.5"
          style={{ fontFamily: 'monospace' }}
        />
      </NodeField>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2px' }}>
        <span style={{ fontSize: '9px', color: '#10b981' }}>↑ matched</span>
        <span style={{ fontSize: '9px', color: '#ef4444' }}>↓ unmatched</span>
      </div>
    </BaseNode>
  );
};
