import { SimpleGrid, SimpleGridProps } from '@mantine/core';
import { UserType } from './types';
import { UserCard } from './UserCard';

interface UsersGridViewProps {
  users: UserType[];
}

export const UsersGridView: React.FC<UsersGridViewProps & SimpleGridProps> = ({
  users,
  cols = 3,
  spacing = 'lg',
  breakpoints = [
    { maxWidth: 'xl', cols: 3 },
    { maxWidth: 'lg', cols: 2 },
    { maxWidth: 'md', cols: 1 },
  ],
  ...other
}) => (
  <SimpleGrid cols={cols} spacing={spacing} breakpoints={breakpoints} {...other}>
    {users.map((user) => (
      <UserCard key={user.id} {...user} />
    ))}
  </SimpleGrid>
);
