import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { testMessageRooms, testMessages } from './data/messages';
import { MessagesList } from '../components/mesages/MessagesList';
import { MessageType } from '../components/mesages/types';

export const MessagesPage = () => {
  const [messages, setMessages] = useState(testMessages);
  const { roomId } = useParams();
  const room = testMessageRooms.find((r) => r.id === roomId);

  const handleMessageCreated = (m: MessageType) => {
    setMessages((old) => [...old, m]);
  };

  return room && <MessagesList room={room} messages={messages} onMessageCreated={handleMessageCreated} />;
};
