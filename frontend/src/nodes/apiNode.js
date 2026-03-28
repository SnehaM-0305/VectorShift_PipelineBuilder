// apiNode.js — HTTP API request node

import { useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { BaseNode, NODE_COLORS, NodeField, NodeInput, NodeSelect } from './BaseNode';

const METHOD_COLORS = {
  GET: '#10b981',
  POST: '#3b82f6',
  PUT: '#f59e0b',
  DELETE: '#ef4444',
  PATCH: '#8b5cf6',
};

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');
  const [headers, setHeaders] = useState(data?.headers || '');

  return (
    <BaseNode
      id={id}
      title="API Request"
      icon={<TbWorld size={14} color={NODE_COLORS.api} />}
      color={NODE_COLORS.api}
      inputs={[{ id: 'body', label: 'body' }]}
      outputs={[{ id: 'response', label: 'response' }]}
    >
      <NodeField label="Method">
        <NodeSelect value={method} onChange={e => setMethod(e.target.value)}>
          {Object.keys(METHOD_COLORS).map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </NodeSelect>
      </NodeField>
      <NodeField label="URL">
        <NodeInput
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://api.example.com/endpoint"
          style={{ fontFamily: 'monospace', fontSize: '11px' }}
        />
      </NodeField>
      <NodeField label="Headers (JSON)">
        <NodeInput
          type="text"
          value={headers}
          onChange={e => setHeaders(e.target.value)}
          placeholder='{"Authorization": "Bearer ..."}'
          style={{ fontFamily: 'monospace', fontSize: '11px' }}
        />
      </NodeField>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{
          background: `${METHOD_COLORS[method]}22`,
          border: `1px solid ${METHOD_COLORS[method]}44`,
          color: METHOD_COLORS[method],
          fontSize: '10px',
          fontWeight: '700',
          padding: '1px 8px',
          borderRadius: '4px',
          fontFamily: 'monospace',
        }}>
          {method}
        </span>
        <span style={{ color: '#64748b', fontSize: '10px' }}>request ready</span>
      </div>
    </BaseNode>
  );
};
