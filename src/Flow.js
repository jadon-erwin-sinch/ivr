import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges
} from 'react-flow-renderer';

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';

import SwitchNode from './NodeTypes/SwitchNode';
import InputNode from './NodeTypes/InputNode.js';

import './NodeStyles.css'
import DefaultNode from './NodeTypes/DefaultNode';
import TransferNode from './NodeTypes/TransferNode';

const nodeTypes = { 
  textUpdater: InputNode,
  switchNode: SwitchNode,
  defaultNode: DefaultNode,
  transferNode: TransferNode
};



export const OverviewFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}     
        fitView
        attributionPosition="top-right"
    >
      {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      /> */}
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
