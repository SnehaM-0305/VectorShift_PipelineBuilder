// llmNode.js

import { TbBrain } from 'react-icons/tb';
import { BaseNode, NODE_COLORS } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon={<TbBrain size={14} color={NODE_COLORS.llm} />}
      color={NODE_COLORS.llm}
      inputs={[
        { id: 'system', label: 'system', style: { top: '38%' } },
        { id: 'prompt', label: 'prompt', style: { top: '62%' } },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
    >
      <div style={{
        background: 'rgba(139,92,246,0.08)',
        border: '1px solid rgba(139,92,246,0.2)',
        borderRadius: '8px',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        <div style={{ color: '#a78bfa', fontSize: '11px', fontWeight: '600' }}>Large Language Model</div>
        <div style={{ color: '#64748b', fontSize: '11px', lineHeight: '1.5' }}>
          Connects <span style={{ color: '#c4b5fd' }}>system prompt</span> and{' '}
          <span style={{ color: '#c4b5fd' }}>user prompt</span> to generate a response.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: NODE_COLORS.llm, opacity: 0.6 }} />
          <span style={{ color: '#64748b', fontSize: '10px' }}>System</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: NODE_COLORS.llm, opacity: 0.6 }} />
          <span style={{ color: '#64748b', fontSize: '10px' }}>Prompt</span>
        </div>
      </div>
    </BaseNode>
  );
};
