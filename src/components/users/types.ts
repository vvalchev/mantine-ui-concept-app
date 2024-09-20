export const UserRoles = ['Admin', 'HR Manager', 'Manager', 'Employee', 'Observer'] as const;
export type UserRoleType = typeof UserRoles[number];

export interface UserType {
  id: string;
  role: UserRoleType;
  title: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  managerId?: string;
}
