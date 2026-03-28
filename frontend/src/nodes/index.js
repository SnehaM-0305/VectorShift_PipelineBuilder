// nodes/index.js — Barrel: exports all node components + nodeTypes map

import { InputNode }     from './inputNode';
import { OutputNode }    from './outputNode';
import { LLMNode }       from './llmNode';
import { TextNode }      from './textNode';
import { FilterNode }    from './filterNode';
import { TransformNode } from './transformNode';
import { APINode }       from './apiNode';
import { MergeNode }     from './mergeNode';
import { ConditionNode } from './conditionNode';

export { InputNode, OutputNode, LLMNode, TextNode, FilterNode, TransformNode, APINode, MergeNode, ConditionNode };

// Re-export primitives so consumers can do: import { NodeField } from './nodes'
export { BaseNode, NODE_COLORS, NodeField, NodeInput, NodeSelect, NodeTextarea } from './BaseNode';

/** ReactFlow nodeTypes map — pass directly to <ReactFlow nodeTypes={nodeTypes} /> */
export const nodeTypes = {
  customInput:  InputNode,
  customOutput: OutputNode,
  llm:          LLMNode,
  text:         TextNode,
  filter:       FilterNode,
  transform:    TransformNode,
  api:          APINode,
  merge:        MergeNode,
  condition:    ConditionNode,
};
