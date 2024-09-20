import useStyles from './OrgChartNode.styles';
import { OrgNode } from './types';

export const ChildrenLines: React.FC = () => (
  <div className='lines-container'>
    <div className='lines' />
    <div className='m-line' />
    <div className='lines' />
  </div>
);

interface OrgChartNodeProps<T> {
  node: OrgNode<T>;
  renderNode: (node: OrgNode<T>) => JSX.Element;
  hasParent?: boolean;
}

export function OrgChartNode<T>({ node, renderNode, hasParent }: OrgChartNodeProps<T>) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className='node'>
        {hasParent && <div className='node-line' />}
        <div className='node-box'>{renderNode(node)}</div>
        {node.childs?.length ? <div className='node-line' /> : null}
      </div>
      <div className='children-container'>
        {node.childs?.map((child) => (
          <div className='child' key={JSON.stringify(child)}>
            <ChildrenLines />
            <OrgChartNode node={child} renderNode={renderNode} hasParent />
          </div>
        ))}
      </div>
    </div>
  );
}
