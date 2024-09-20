import { formatDistanceToNow } from 'date-fns';
import { Group, Avatar, Text, DefaultProps } from '@mantine/core';
import { ArticleType } from './types';

interface ArticleLineProps extends DefaultProps {
  data: ArticleType;
}

export const ArticleLine: React.FC<ArticleLineProps> = ({ data, ...rest }) => {
  const when = formatDistanceToNow(new Date(data.posted), { addSuffix: true });

  return (
    <Group noWrap {...rest}>
      <Avatar src={data.image} size='sm' />
      <Text>{data.title}</Text>
      <Text size='xs' color='dimmed'>
        {when}
      </Text>
    </Group>
  );
};
