// outputNode.js

import { useState } from 'react';
import { TbArrowDownToArc } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      icon={<TbArrowDownToArc size={14} color={NODE_COLORS.customOutput} />}
      color={NODE_COLORS.customOutput}
      inputs={[{ id: 'value', label: 'input' }]}
    >
      <NodeField label="Name">
        <NodeInput
          type="text"
          value={currName}
          onChange={e => setCurrName(e.target.value)}
          placeholder="output_name"
        />
      </NodeField>
      <NodeField label="Type">
        <NodeSelect value={outputType} onChange={e => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
