import { UnstyledButton } from '@mantine/core';
import { OrgNode } from '../components/orgchart/types';
import { UserCard } from '../components/users/UserCard';
import { UserType } from '../components/users/types';
import { testUsers } from './data/users';
import { OrgChart } from '../components/orgchart/OrgChart';

const buildNodes = (manager: UserType, users: UserType[], levels: number): OrgNode<UserType> => {
  const node: OrgNode<UserType> = {
    data: manager,
  };
  if (levels <= 1) return node;

  const team = users.filter((u) => u.managerId === manager.id);
  if (team.length === 0) return node;

  node.childs = team.map((user) => buildNodes(user, users, levels - 1));
  return node;
};

const renderFunc = (node: OrgNode<UserType>) => {
  const { avatar, name, title, phone, email } = node.data;
  return (
    <UnstyledButton onClick={() => console.log(node)}>
      <UserCard {...{ avatar, name, title, phone, email }} style={{ maxWidth: 300, margin: 0 }} />
    </UnstyledButton>
  );
};

export const OrgChartPage = () => (
  <div style={{ overflow: 'scroll', scale: '60%', width: '160%', marginLeft: '-30%', background: 'transparent' }}>
    <OrgChart nodes={[buildNodes(testUsers[0], testUsers, 4)]} renderNode={renderFunc} />
  </div>
);
