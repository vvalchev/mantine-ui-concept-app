import { ActionIcon, Badge, Card, Group, Image, ScrollArea, Stack, Text, px, useMantineTheme } from '@mantine/core';
import { formatDistanceToNow } from 'date-fns';
import { IconHeart, IconBookmark } from '@tabler/icons-react';
import { ArticleType } from './types';

// generate unique color for each tag
export const useUniqueTagColor = () => {
  const theme = useMantineTheme();
  const colors = Object.keys(theme.colors);

  return (tag: string) => {
    const hash = tag
      .split('')
      .map((v) => v.charCodeAt(0))
      // eslint-disable-next-line no-bitwise
      .reduce((a, v) => (a + ((a << 7) + (a << 3))) ^ v);
    return `${colors[Math.abs(hash) % colors.length]}`;
  };
};

interface ArticleProps {
  data: ArticleType;
  showContent?: boolean;
}

export const Article: React.FC<ArticleProps> = ({ data, showContent }) => {
  const when = formatDistanceToNow(new Date(data.posted), { addSuffix: true });
  const tagColor = useUniqueTagColor();

  return (
    <Card>
      <Card.Section mb='sm'>
        <Image src={data.image} alt={data.title} height={180} withPlaceholder />
      </Card.Section>
      <Stack h={showContent ? undefined : '7rem'}>
        <ScrollArea type='scroll'>
          {data.tags && (
            <Group spacing='xs'>
              {data.tags.map((tag) => (
                <Badge key={tag} size='xs' color={tagColor(tag)}>
                  #{tag}
                </Badge>
              ))}
            </Group>
          )}

          <Text size='xs' color='dimmed'>
            {when}
          </Text>
          <Text weight='bold' mt='xs'>
            {data.title}
          </Text>
          {showContent && <Text>{data.text}</Text>}
        </ScrollArea>
      </Stack>

      <Card.Section withBorder inheritPadding py='xs' mt='md'>
        <Group position='apart'>
          <Text size='xs' color='dimmed'>
            {data.votes} people liked this
          </Text>
          <Group spacing={0}>
            <ActionIcon color='red.6'>
              <IconHeart size={px('1.2rem')} />
            </ActionIcon>
            <ActionIcon color='yellow.6'>
              <IconBookmark size={px('1.2rem')} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
