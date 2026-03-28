// conditionNode.js — Branch pipeline flow based on a boolean condition

import { useState } from 'react';
import { TbGitBranch } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeInput } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  return (
    <BaseNode
      id={id}
      title="Condition"
      icon={<TbGitBranch size={14} color={NODE_COLORS.condition} />}
      color={NODE_COLORS.condition}
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[
        { id: 'true', label: 'true', color: '#10b981', style: { top: '38%' } },
        { id: 'false', label: 'false', color: '#ef4444', style: { top: '62%' } },
      ]}
    >
      <NodeField label="Condition Expression">
        <NodeInput
          type="text"
          value={condition}
          onChange={e => setCondition(e.target.value)}
          placeholder="e.g. value.length > 10"
          style={{ fontFamily: 'monospace' }}
        />
      </NodeField>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', paddingTop: '2px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ color: '#64748b', fontSize: '10px' }}>true → continue</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ color: '#64748b', fontSize: '10px' }}>false → skip</span>
        </div>
      </div>
    </BaseNode>
  );
};
