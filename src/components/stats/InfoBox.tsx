import { Group, Text, px, Card } from '@mantine/core';
import { Icon as TablerIcon } from '@tabler/icons-react';
import { ReactNode } from 'react';
import useStyles from './InfoBox.styles';

export interface InfoBoxProps {
  title: string;
  icon: TablerIcon;
  action?: ReactNode;
  info?: string;
  children: ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ title, icon: Icon, info, action, children }) => {
  const { classes } = useStyles();

  return (
    <Card>
      <Card.Section withBorder p='xs'>
        <Group position='apart'>
          <Text className={classes.title}>{title}</Text>
          <Group spacing='xs'>
            {action}
            <Icon className={classes.icon} />
          </Group>
        </Group>
      </Card.Section>

      <Group className={classes.text}>{children}</Group>

      <Text className={classes.info}>{info}</Text>
    </Card>
  );
};
