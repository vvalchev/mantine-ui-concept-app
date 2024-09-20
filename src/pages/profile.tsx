import { ReactNode, useContext, useEffect, useState } from 'react';
import {
  ActionIcon,
  Divider,
  Group,
  Title,
  Tooltip,
  UnstyledButton,
  Text,
  SimpleGrid,
  List,
  Tabs,
  Center,
} from '@mantine/core';
import {
  IconBeach,
  IconBookmark,
  IconBookmarkFilled,
  IconDashboard,
  IconSchool,
  IconSettings,
  IconStar,
  IconTargetArrow,
} from '@tabler/icons-react';
import { useToggle } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { UserCard } from '../components/users/UserCard';
import { ApplicationContext } from '../contexts/ApplicationContext';

import { testArticles } from './data/articles';
import { ArticleLine } from '../components/article/ArticleLine';
import { InfoBox, InfoBoxProps } from '../components/stats/InfoBox';
import { UserEditor } from '../components/users/UserEditor';
import { UserAvatarEditor } from '../components/users/UserAvatarEditor';
import { UserDashboard } from '../components/users/UserDashboard';
import { UserStats } from '../components/users/UserStats';
import { UserSettingsEditor } from '../components/users/UserSettingsEditor';

interface ProfileInfoBoxProps extends Omit<InfoBoxProps, 'children'> {
  mainText: ReactNode;
  subText: ReactNode;
}
const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({ mainText, subText, ...rest }) => (
  <InfoBox {...rest}>
    <Text fw={700}>{mainText}</Text>
    <Text size='xs' color='dimmed'>
      {subText}
    </Text>
  </InfoBox>
);

export const ProfilePage = () => {
  const { user } = useContext(ApplicationContext);
  const [articles, setArticles] = useState(testArticles);
  const [onlyBookmarks, toggleOnlyBookmarks] = useToggle([false, true]);

  useEffect(() => {
    if (onlyBookmarks) {
      setArticles(testArticles.filter((a) => a.favourite));
    } else {
      setArticles(testArticles.slice(0, 3));
    }
  }, [onlyBookmarks]);

  if (!user) return null;

  return (
    <>
      <Center>
        <UserAvatarEditor user={user} />
      </Center>
      <Tabs defaultValue='dashboard'>
        <Tabs.List mb='xl'>
          <Tabs.Tab value='dashboard' icon={<IconStar size={16} />}>
            Dashboard
          </Tabs.Tab>
          <Tabs.Tab value='stats' icon={<IconDashboard size={16} />}>
            Statistics
          </Tabs.Tab>
          <Tabs.Tab value='settings' icon={<IconSettings size={16} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='dashboard'>
          <UserDashboard user={user} />
        </Tabs.Panel>
        <Tabs.Panel value='stats'>
          <UserStats user={user} />
        </Tabs.Panel>
        <Tabs.Panel value='settings'>
          <UserSettingsEditor user={user} />
        </Tabs.Panel>
      </Tabs>
    </>
  );

  if (false) {
    return (
      <>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 'lg', cols: 2 },
            { maxWidth: 'sm', cols: 1 },
          ]}
        >
          {user && <UserCard {...user} />}

          <ProfileInfoBox title='Time Off / days' icon={IconBeach} mainText='10 used' subText='of 25' />
          <ProfileInfoBox title='Time Off / requests' icon={IconBeach} mainText='1' subText='pending' />
          <ProfileInfoBox title='Courses' icon={IconSchool} mainText='1 pending' subText='20 passed' />
          <ProfileInfoBox title='Goals' icon={IconTargetArrow} mainText='70%' subText='complete' />
        </SimpleGrid>

        <>
          <Title order={3} mt='xl'>
            My Team
          </Title>
          <List spacing='md'>
            <List.Item>Today is George&apos;s birthday!</List.Item>
            <List.Item>Ivan Ivanov is out of office until 20 august 2023</List.Item>
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
          <Title order={3}>Recommend a friend!</Title>
          <List spacing='md'>
            <List.Item>
              <a href='#'>Senior Software Engineer (backend team)</a>
            </List.Item>
            <List.Item>
              <a href='#'>UI/UX Designer</a>
            </List.Item>
          </List>
        </>

        <>{user && <UserEditor user={user} />}</>
      </>
    );
  }
};
