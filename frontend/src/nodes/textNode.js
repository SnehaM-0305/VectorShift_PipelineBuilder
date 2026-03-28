// textNode.js — Auto-resizing text node with {{variable}} handles

import { useState, useMemo } from 'react';
import { Position } from 'reactflow';
import { TbFileText } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeTextarea } from './BaseNode';
import { VariablePillRow } from '../components/ui/VariablePill';

/** Extract unique valid JS identifier names from {{name}} tokens */
const extractVariables = (text) => {
  const regex = /\{\{([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
  const seen = new Set();
  const vars = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    const name = match[1].trim();
    if (!seen.has(name)) { seen.add(name); vars.push(name); }
  }
  return vars;
};

/** Textarea height from content */
const calcTextareaHeight = (text) => {
  const lines = text.split('\n');
  const longest = Math.max(...lines.map(l => l.length), 10);
  return {
    width:  Math.max(220, Math.min(500, longest * 7.8 + 60)),
    height: Math.max(60,  lines.length * 20 + 16),
  };
};

/** Vertical band (%) for left handles */
const handleTopPercent = (index, count) => {
  if (count <= 0) return '50%';
  if (count === 1) return '52%';
  const top = count >= 4 ? 38 : 40;
  const bot = count >= 4 ? 70 : count === 3 ? 72 : 74;
  return `${top + (index / (count - 1)) * (bot - top)}%`;
};

/** Small extra bottom padding only — no outer minHeight (that caused huge empty strip below pills) */
const bottomPaddingForVars = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 8;
  return 6 + (n - 1) * 10;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => extractVariables(currText), [currText]);
  const n = variables.length;

  const { width, height: textareaH } = useMemo(
    () => calcTextareaHeight(currText),
    [currText]
  );

  const bodyPaddingBottomExtra = useMemo(() => bottomPaddingForVars(n), [n]);

  const variableHandles = variables.map((varName, i) => ({
    id:       `var-${varName}`,
    label:    varName,
    position: Position.Left,
    style:    { top: handleTopPercent(i, n) },
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      icon={<TbFileText size={14} color={NODE_COLORS.text} />}
      color={NODE_COLORS.text}
      inputs={variableHandles}
      outputs={[{ id: 'output', label: 'output' }]}
      bodyPaddingBottomExtra={bodyPaddingBottomExtra}
      style={{ width }}
    >
      <NodeField label="Text">
        <NodeTextarea
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          placeholder="Enter text with {{variables}}…"
          style={{ height: textareaH }}
        />
      </NodeField>

      <VariablePillRow variables={variables} />
    </BaseNode>
  );
};
