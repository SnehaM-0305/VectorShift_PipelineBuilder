// ui.js — Pipeline canvas with drag-and-drop and delete(keyboard) support

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import {
  InputNode, OutputNode, LLMNode, TextNode,
  FilterNode, TransformNode, APINode, MergeNode, ConditionNode,
} from './nodes';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  filter: FilterNode,
  transform: TransformNode,
  api: APINode,
  merge: MergeNode,
  condition: ConditionNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes, edges, getNodeID, addNode,
    onNodesChange, onEdgesChange, onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => ({
    id: nodeID,
    nodeType: type,
    onDelete: (id) => {  // ✅ Delete button support
      onNodesChange([{ id, type: 'remove' }]);
    },
  });

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const appData = event.dataTransfer.getData('application/reactflow');
      if (!appData) return;

      const { nodeType: type } = JSON.parse(appData);
      if (!type || !reactFlowInstance) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);
      addNode({
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      });
    },
    [reactFlowInstance, getNodeID, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div ref={reactFlowWrapper} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        snapToGrid
        connectionLineType="smoothstep"
        connectionLineStyle={{ stroke: '#6366f1', strokeWidth: 2 }}
        defaultEdgeOptions={{ style: { stroke: '#6366f1', strokeWidth: 2 }, animated: true }}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        deleteKeyCode={['Delete', 'Backspace']} // ✅ Delete node using keyboard
      >
        <Background color="rgba(99,102,241,0.15)" gap={gridSize} size={1} style={{ background: '#0a0d14' }} />
        <Controls style={{
          background: 'rgba(22,27,46,0.9)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }} />
        <MiniMap
          style={{ background: 'rgba(15,19,32,0.95)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px' }}
          nodeColor={(node) => {
            const colorMap = {
              customInput: '#10b981',
              customOutput: '#f59e0b',
              llm: '#8b5cf6',
              text: '#3b82f6',
              filter: '#ef4444',
              transform: '#06b6d4',
              api: '#ec4899',
              merge: '#84cc16',
              condition: '#f97316',
            };
            return colorMap[node.type] || '#6366f1';
          }}
          maskColor="rgba(10,13,20,0.7)"
        />
      </ReactFlow>
    </div>
  );
};