import { useContext, useEffect, useRef } from 'react';
import { ActionIcon, Card, Flex, ScrollArea, TextInput, Title, createStyles } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { IconSend } from '@tabler/icons-react';

import { MessageRoomType, MessageType, MessageUserType } from './types';
import { MessageView } from './MessageView';
import { ApplicationContext } from '../../contexts/ApplicationContext';

const sortByDate = (a: MessageType, b: MessageType) => new Date(a.posted).getTime() - new Date(b.posted).getTime();

const useStyles = createStyles((theme) => ({
  flex: {
    '.mantine-ScrollArea-viewport': {
      '> div': {
        display: 'flex  !important',
        flexDirection: 'column',
        alignItems: 'end',
        gap: theme.spacing.xs,
        padding: theme.spacing.xs,
      },
    },
  },
}));

interface MessagesListProps {
  room: MessageRoomType;
  messages: MessageType[];
  onMessageCreated?: (message: MessageType) => void;
}

export const MessagesList: React.FC<MessagesListProps> = ({ room, messages, onMessageCreated }) => {
  const { user } = useContext(ApplicationContext);

  const otherUsers: MessageUserType[] = room.type === 'private' ? room.users.filter((u) => u.id !== user?.id) : [];

  const title = room.type === 'private' ? otherUsers.map((u) => u.name).join(',') : `# ${room.name}`;

  const { classes } = useStyles();
  const { height } = useViewportSize();

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = e.currentTarget?.elements.namedItem('text') as HTMLInputElement;

    if (el.value && onMessageCreated) {
      onMessageCreated({
        id: URL.createObjectURL(new Blob([])).slice(-36),
        text: el.value,
        posted: new Date().toISOString(),
        toRoomId: room.id,
        fromUserId: user?.id || '',
      });
      el.value = '';
    }
  };

  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewport.current?.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
  });

  return (
    <Card padding='lg'>
      <Card.Section py='sm' inheritPadding withBorder>
        <Title order={4} color='brand'>
          {title}
        </Title>
      </Card.Section>
      <Card.Section>
        <ScrollArea className={classes.flex} h={height - 210} type='always' viewportRef={viewport}>
          {messages.sort(sortByDate).map((message) => (
            <MessageView key={message.id} message={message} />
          ))}
        </ScrollArea>
      </Card.Section>
      <Card.Section bg='brand' py='sm' inheritPadding>
        <form onSubmit={handleSendMessage}>
          <Flex align='center' h='100%'>
            <TextInput name='text' size='xs' style={{ flex: 1 }} />
            <ActionIcon size='md' ml='sm' variant='light' color='brand' component='button' type='submit'>
              <IconSend size='16px' />
            </ActionIcon>
          </Flex>
        </form>
      </Card.Section>
    </Card>
  );
};
