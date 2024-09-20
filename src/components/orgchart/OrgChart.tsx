import { Flex } from '@mantine/core';
import { OrgChartNode } from './OrgChartNode';
import { OrgNode } from './types';

interface OrgChartProps<T> {
  nodes: OrgNode<T>[];
  renderNode: (node: OrgNode<T>) => JSX.Element;
}

export function OrgChart<T>({ nodes, renderNode }: OrgChartProps<T>) {
  return (
    <>
      {nodes.map((node) => (
        <Flex mb='2em' key={JSON.stringify(node)}>
          <OrgChartNode node={node} renderNode={renderNode} />
        </Flex>
      ))}
    </>
  );
}
