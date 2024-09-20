export interface MessageUserType {
  id: string;
  name: string;
  avatar?: string;
}

export interface MessageRoomType {
  id: string; // uuid
  type: 'private' | 'channel_private' | 'channel_public';
  name: string;
  title?: string;
  users: MessageUserType[];
  unread: number;
}

export interface MessageType {
  id: string; // uuid
  text: string;
  posted: string; // datetime
  toRoomId: string;
  fromUserId: string;
}
