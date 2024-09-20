import { Title, Text, List, Divider, Group, Tooltip, ActionIcon, UnstyledButton, Stack } from '@mantine/core';
import {
  IconBookmarkFilled,
  IconBookmark,
  IconCake,
  IconBeach,
  IconCalendarEvent,
  IconFileCv,
  IconFriends,
  IconNews,
  IconSpeakerphone,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useToggle } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { ArticleLine } from '../article/ArticleLine';
import { UserType } from './types';
import { testArticles } from '../../pages/data/articles';
import { InfoBox } from '../stats/InfoBox';

interface UserDashboardProps {
  user: UserType;
}

// FIXME: get info from user
export const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  const [articles, setArticles] = useState(testArticles);
  const [onlyBookmarks, toggleOnlyBookmarks] = useToggle([false, true]);

  useEffect(() => {
    if (onlyBookmarks) {
      setArticles(testArticles.filter((a) => a.favourite));
    } else {
      setArticles(testArticles.slice(0, 3));
    }
  }, [onlyBookmarks]);

  const infoBoxes = true;

  const withTitles = (
    <>
      <Title order={3} mt='xl'>
        My Team
      </Title>
      <List spacing='md'>
        <List.Item icon={<IconCake />}>Today is George&apos;s birthday!</List.Item>
        <List.Item icon={<IconBeach />}>Ivan Ivanov is out of office until 20 august 2023</List.Item>
      </List>

      <Divider my='xl' />
      <Group position='apart'>
        <Title order={3}>Latest News</Title>
        <Tooltip label='Show only favourites'>
          <ActionIcon size='md' color='yellow' variant='transparent' onClick={() => toggleOnlyBookmarks()}>
            {onlyBookmarks ? <IconBookmarkFilled /> : <IconBookmark />}
          </ActionIcon>
        </Tooltip>
      </Group>
      {articles.map((article) => (
        <UnstyledButton component={Link} to={`/news/${article.id}`} key={article.id}>
          <ArticleLine data={article} pb='sm' />
        </UnstyledButton>
      ))}

      <Divider my='xl' />
      <Title order={3} mt='xl'>
        Events
      </Title>
      <List spacing='md' icon={<IconCalendarEvent />}>
        <List.Item>
          Sign up for dances with Dance Academy
          <Text size='xs' color='dimmed'>
            no later than August 3rd
          </Text>
        </List.Item>
        <List.Item>
          Hiking to the Seven Rila Lakes{' '}
          <Text size='xs' color='dimmed'>
            Join us on Saturday - August 12th
          </Text>
        </List.Item>
      </List>

      <Divider my='xl' />
      <Title order={3}>Recommend a friend!</Title>
      <List spacing='md' icon={<IconFileCv />}>
        <List.Item>
          <a href='#'>Senior Software Engineer (backend team)</a>
        </List.Item>
        <List.Item>
          <a href='#'>UI/UX Designer</a>
        </List.Item>
      </List>
    </>
  );

  const withBoxes = (
    <Stack spacing='xl'>
      <InfoBox title='My Team' icon={IconFriends}>
        <List spacing='md'>
          <List.Item icon={<IconCake />}>Today is George&apos;s birthday!</List.Item>
          <List.Item icon={<IconBeach />}>Ivan Ivanov is out of office until 20 august 2023</List.Item>
        </List>
      </InfoBox>
      <InfoBox
        title='Latest News'
        action={
          <Tooltip label='Show only favourites'>
            <ActionIcon size='md' color='yellow' variant='transparent' onClick={() => toggleOnlyBookmarks()}>
              {onlyBookmarks ? <IconBookmarkFilled /> : <IconBookmark />}
            </ActionIcon>
          </Tooltip>
        }
        icon={IconNews}
      >
        <Stack>
          {articles.map((article) => (
            <UnstyledButton component={Link} to={`/news/${article.id}`} key={article.id}>
              <ArticleLine data={article} pb='sm' />
            </UnstyledButton>
          ))}
        </Stack>
      </InfoBox>

      <InfoBox title='Events' icon={IconCalendarEvent}>
        <List spacing='md' icon={<IconCalendarEvent />}>
          <List.Item>
            Sign up for dances with Dance Academy
            <Text size='xs' color='dimmed'>
              no later than August 3rd
            </Text>
          </List.Item>
          <List.Item>
            Hiking to the Seven Rila Lakes{' '}
            <Text size='xs' color='dimmed'>
              Join us on Saturday - August 12th
            </Text>
          </List.Item>
        </List>
      </InfoBox>

      <InfoBox title='Recommend a friend!' icon={IconSpeakerphone}>
        <List spacing='md' icon={<IconFileCv />}>
          <List.Item>
            <a href='#'>Senior Software Engineer (backend team)</a>
          </List.Item>
          <List.Item>
            <a href='#'>UI/UX Designer</a>
          </List.Item>
        </List>
      </InfoBox>
    </Stack>
  );

  return infoBoxes ? withBoxes : withTitles;
};
