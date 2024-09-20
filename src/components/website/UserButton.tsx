import { UnstyledButton, UnstyledButtonProps, Group, Avatar, Stack, Text, px } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import useStyles from './UserButton.styles';

interface UserButtonProps extends UnstyledButtonProps {
  avatar?: string;
  name: string;
  email: string;
  active: boolean;
  icon?: React.ReactNode;
}

export const UserButton: React.FC<UserButtonProps> = ({ avatar, name, email, icon, active }) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={`${classes.user}`} style={{ width: '100%' }} data-active={active || undefined}>
      <Group>
        <Avatar src={avatar} radius='xl' />

        <Stack spacing='0' style={{ flex: 1 }}>
          <Text size='sm' weight={500}>
            {name}
          </Text>
          <Text size='xs' color={active ? '' : 'dimmed'}>
            {email}
          </Text>
        </Stack>

        {icon || <IconChevronRight size={px('1rem')} stroke={0.5} />}
      </Group>
    </UnstyledButton>
  );
};
