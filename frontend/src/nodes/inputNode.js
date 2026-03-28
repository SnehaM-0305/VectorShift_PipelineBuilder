// inputNode.js

import { useState } from 'react';
import { TbArrowUpFromArc } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      icon={<TbArrowUpFromArc size={14} color={NODE_COLORS.customInput} />}
      color={NODE_COLORS.customInput}
      outputs={[{ id: 'value', label: 'output' }]}
    >
      <NodeField label="Name">
        <NodeInput
          type="text"
          value={currName}
          onChange={e => setCurrName(e.target.value)}
          placeholder="input_name"
        />
      </NodeField>
      <NodeField label="Type">
        <NodeSelect value={inputType} onChange={e => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
