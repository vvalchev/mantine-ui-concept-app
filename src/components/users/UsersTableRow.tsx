import { ActionIcon, Avatar, Group, Select, Text, px } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { UserRoleType, UserRoles, UserType } from './types';

interface UsersTableRowProps {
  user: UserType;
  onRoleChange?: (user: UserType, role: UserRoleType) => void;
  onEdit?: (user: UserType) => void;
  onDelete?: (user: UserType) => void;
}

export const UsersTableRow: React.FC<UsersTableRowProps> = ({ user, onRoleChange, onEdit, onDelete }) => (
  <tr>
    <td>
      <Group spacing='sm'>
        <Avatar size={40} src={user.avatar} radius={40} />
        <div>
          <Text fz='sm' fw={500}>
            {user.name}
          </Text>
          <Text fz='xs' c='dimmed'>
            {user.email}
          </Text>
        </div>
      </Group>
    </td>
    <td style={{ width: '12rem' }}>
      <Text>{user.phone}</Text>
    </td>
    <td>{Math.ceil(Math.random() * 5)} days ago</td>
    {onRoleChange && (
      <td>
        <Select
          miw='8rem'
          variant='unstyled'
          value={user.role}
          onChange={(val) => onRoleChange(user, val as UserRoleType)}
          data={UserRoles}
        />
      </td>
    )}
    {(onDelete || onEdit) && (
      <td width='1em'>
        <Group spacing={0} position='right' noWrap>
          {onEdit && (
            <ActionIcon onClick={() => onEdit(user)}>
              <IconPencil size={px('1rem')} />
            </ActionIcon>
          )}
          {onDelete && (
            <ActionIcon onClick={() => onDelete(user)} color='red'>
              <IconTrash size={px('1rem')} />
            </ActionIcon>
          )}
        </Group>
      </td>
    )}
  </tr>
);
