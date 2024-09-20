import { Avatar, Text, Group, createStyles, px, Card, CardProps, DefaultProps } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { UserType } from './types';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));

type UserCardProps = Pick<UserType, 'avatar' | 'name' | 'title' | 'phone' | 'email'> & DefaultProps<never, never>;

export const UserCard: React.FC<UserCardProps> = ({ avatar, name, title, phone, email, ...rest }) => {
  const { classes } = useStyles();

  return (
    <Card p='md' {...rest}>
      <Group noWrap grow={false} fz='xs'>
        <Avatar src={avatar} size={94} radius='md' />
        <div>
          <Text c='dimmed' tt='uppercase' weight='bolder'>
            {title}
          </Text>

          <Text fz='md' weight='bold'>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size={px('1rem')} className={classes.icon} />
            <Text c='dimmed'>{email}</Text>
          </Group>

          {phone && (
            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall stroke={1.5} size={px('1rem')} className={classes.icon} />
              <Text c='dimmed'>{phone}</Text>
            </Group>
          )}
        </div>
      </Group>
    </Card>
  );
};
