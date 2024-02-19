import { DrupalNode } from 'next-drupal';

import { isNodeType, nodeTypes } from './nodes';

interface NodeProps {
  node: DrupalNode;
}

export default function Node({ node }: NodeProps) {
  const nodeType = node?.data?.type;

  if (isNodeType(nodeType)) {
    const NodeInstance = nodeTypes[nodeType];
    return <NodeInstance node={node} />;
  }

  return null;
}
