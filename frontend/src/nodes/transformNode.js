// transformNode.js — Apply a transformation/mapping to input data

import { useState } from 'react';
import { TbTransform } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeSelect, NodeTextarea } from './BaseNode';

const TRANSFORM_TYPES = [
  'Uppercase',
  'Lowercase',
  'Trim',
  'Parse JSON',
  'Stringify JSON',
  'Custom Expression',
];

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'Uppercase');
  const [expression, setExpression] = useState(data?.expression || '');

  const showExpression = transformType === 'Custom Expression';

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon={<TbTransform size={14} color={NODE_COLORS.transform} />}
      color={NODE_COLORS.transform}
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'output', label: 'output' }]}
    >
      <NodeField label="Operation">
        <NodeSelect
          value={transformType}
          onChange={e => setTransformType(e.target.value)}
        >
          {TRANSFORM_TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </NodeSelect>
      </NodeField>
      {showExpression && (
        <NodeField label="Expression">
          <NodeTextarea
            value={expression}
            onChange={e => setExpression(e.target.value)}
            placeholder="e.g. value.replace(/\s+/g, '_')"
            rows={3}
          />
        </NodeField>
      )}
    </BaseNode>
  );
};
