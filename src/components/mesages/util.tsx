import { ReactNode, useContext } from 'react';
import { IconHash, IconLock, IconUsers } from '@tabler/icons-react';
import { Avatar, Badge } from '@mantine/core';
import { MessageRoomType, MessageUserType } from './types';
import { ApplicationContext } from '../../contexts/ApplicationContext';

interface RoomVisualAttributes {
  label: string;
  icon?: ReactNode;
  rightSection?: ReactNode;
}

const getIcon = (room: MessageRoomType, users: MessageUserType[]) => {
  switch (room.type) {
    case 'channel_public':
      return <IconHash size='16px' />;
    case 'channel_private':
      return <IconLock size='16px' />;
    default:
      return users.length === 1 ? (
        <Avatar size='16px' alt={users[0].name || 'User Avatar'} src={users[0].avatar} />
      ) : (
        <IconUsers size='16px' />
      );
  }
};

export const getRoomAttributes = (room: MessageRoomType): RoomVisualAttributes => {
  const { user } = useContext(ApplicationContext);

  const otherUsers: MessageUserType[] = room.type === 'private' ? room.users.filter((u) => u.id !== user?.id) : [];

  return {
    label: room.type === 'private' ? otherUsers.map((u) => u.name).join(',') : room.name,
    icon: getIcon(room, otherUsers),
    rightSection: room.unread ? (
      <Badge size='xs' color='red'>
        {room.unread}
      </Badge>
    ) : undefined,
  };
};
