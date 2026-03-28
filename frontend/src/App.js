import { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      background: '#0a0d14',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <PipelineToolbar />
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <PipelineUI 
          nodes={nodes} 
          setNodes={setNodes} 
          edges={edges} 
          setEdges={setEdges} 
        />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;