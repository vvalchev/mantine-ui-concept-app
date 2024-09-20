import { Table } from '@mantine/core';
import { UserRoleType, UserType } from './types';
import { UsersTableRow } from './UsersTableRow';

interface UsersTableViewProps {
  users: UserType[];
  onRoleChange?: (user: UserType, role: UserRoleType) => void;
  onEdit?: (user: UserType) => void;
  onDelete?: (user: UserType) => void;
}
export const UsersTableView: React.FC<UsersTableViewProps> = ({ users, onRoleChange, onEdit, onDelete }) => (
  <Table striped verticalSpacing='sm'>
    <thead>
      <tr>
        <th>Employee</th>
        <th>Phone</th>
        <th>Last active</th>
        {onRoleChange && <th style={{ width: '12rem' }}>Role</th>}
        {(onEdit || onDelete) && <th style={{ width: '1rem' }}>Actions</th>}
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <UsersTableRow key={user.id} user={user} onRoleChange={onRoleChange} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </tbody>
  </Table>
);
