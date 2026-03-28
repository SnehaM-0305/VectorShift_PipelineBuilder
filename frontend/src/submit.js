// submit.js — Pipeline submission bar; wires store → backend → modal

import { useState } from 'react';
import { TbSend, TbLoader } from 'react-icons/tb';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { ResultModal }      from './components/modal/ResultModal';
import { ErrorToast }       from './components/ui/ErrorToast';
import { PipelineCounter }  from './components/ui/PipelineCounter';
import { PrimaryButton }    from './components/ui/PrimaryButton';
import { COLORS }           from './theme/tokens';

const selector = (state) => ({ nodes: state.nodes, edges: state.edges });

// ─── Submit footer bar ────────────────────────────────────────────────────────
export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [result,    setResult]    = useState(null);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      showError('Add at least one node to the canvas before submitting.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:8000/pipelines/parse', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ nodes, edges }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setResult(data);
      setShowModal(true);
    } catch (err) {
      showError(
        err.message.includes('fetch')
          ? 'Cannot reach backend. Make sure the server is running on port 8000.'
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(null), 5000);
  };

  const closeModal = () => { setShowModal(false); setResult(null); };

  return (
    <>
      <SubmitBar
        nodeCount={nodes.length}
        edgeCount={edges.length}
        loading={loading}
        onSubmit={handleSubmit}
      />

      {showModal && result && <ResultModal result={result} onClose={closeModal} />}
      {error && <ErrorToast message={error} onClose={() => setError(null)} />}
    </>
  );
};

// ─── Footer bar ───────────────────────────────────────────────────────────────
const SubmitBar = ({ nodeCount, edgeCount, loading, onSubmit }) => (
  <div
    style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '14px 24px',
      background:     `${COLORS.bg}f5`,
      borderTop:      '1px solid rgba(255,255,255,0.05)',
      gap:            '14px',
      flexShrink:     0,
    }}
  >
    <PipelineCounter nodeCount={nodeCount} edgeCount={edgeCount} />
    <RunButton loading={loading} onClick={onSubmit} />
  </div>
);

// ─── Run button ───────────────────────────────────────────────────────────────
const RunButton = ({ loading, onClick }) => (
  <PrimaryButton onClick={onClick} disabled={loading}>
    {loading
      ? <><TbLoader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Analyzing…</>
      : <><TbSend size={16} /> Run Pipeline</>
    }
  </PrimaryButton>
);
