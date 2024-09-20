import { Stack, Group, Indicator, Avatar, Text, FileButton, ActionIcon } from '@mantine/core';
import { IconUpload, IconX } from '@tabler/icons-react';
import { UserType } from './types';

interface UserAvatarEditorProps {
  user: UserType;
  onChange?: (user: UserType, file: File) => void;
  onRemove?: (user: UserType) => void;
}

export const UserAvatarEditor: React.FC<UserAvatarEditorProps> = ({ user, onChange, onRemove }) => {
  const handleFileUpload = (payload: File) => {
    if (onChange) {
      onChange(user, payload);
    }
  };

  const handleRemoveImage = () => {
    if (onRemove) {
      onRemove(user);
    }
  };

  const UploadIcon = (
    <FileButton onChange={handleFileUpload} accept='image/png,image/jpeg'>
      {(props) => (
        <ActionIcon {...props} radius='xl' variant='filled' color='green'>
          <IconUpload size={16} />
        </ActionIcon>
      )}
    </FileButton>
  );

  const RemoveIcon = (
    <ActionIcon radius='xl' variant='filled' color='red' onClick={handleRemoveImage}>
      <IconX size={16} />
    </ActionIcon>
  );

  return (
    <Stack spacing='xs'>
      <Group position='center'>
        <Indicator inline position='bottom-end' size={40} offset={20} label={RemoveIcon} color='transparent'>
          <Indicator inline position='middle-end' size={40} label={UploadIcon} color='transparent'>
            <Avatar size={128} radius={128} src={user.avatar} alt={user.name} />
          </Indicator>
        </Indicator>
      </Group>
      <Text align='center'>{user.name}</Text>
      <Text align='center' size='sm' color='dimmed'>
        {user.email}
      </Text>
    </Stack>
  );
};
