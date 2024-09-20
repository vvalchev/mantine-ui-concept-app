import { useContext } from 'react';
import { formatRelative } from 'date-fns';
import { Avatar, Card, Center, Group, Space, Text, createStyles } from '@mantine/core';

import { MessageType } from './types';
import { ApplicationContext } from '../../contexts/ApplicationContext';
import { testUsers } from '../../pages/data/users';

const useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'light', color: theme.primaryColor });

  return {
    own: {
      padding: theme.spacing.md,
      backgroundColor: colors.background,
      color: colors.color,
      alignSelf: 'start',
    },
  };
});

interface MessageViewProps {
  message: MessageType;
}

export const MessageView: React.FC<MessageViewProps> = ({ message }) => {
  const { user: currentUser } = useContext(ApplicationContext);
  const user = testUsers.find((u) => u.id === message.fromUserId);

  const isOwnMessage = message.fromUserId === currentUser?.id;

  const oldDate = new Date(message.posted);
  const when = formatRelative(oldDate, new Date());
  const { classes } = useStyles();

  return (
    <Card p='xs' w='80%' className={isOwnMessage ? classes.own : ''}>
      <Group noWrap align='flex-start'>
        <Avatar src={user?.avatar} size={32} radius='md' />
        <div>
          <Center inline>
            <Text size='xs' transform='uppercase' weight='bolder' c='dimmed'>
              {user?.name}
            </Text>
            <Space w='sm' />
            <Text size='xs' c='dimmed'>
              {when}
            </Text>
          </Center>

          <Text size='sm'>{message.text}</Text>
        </div>
      </Group>
    </Card>
  );
};
