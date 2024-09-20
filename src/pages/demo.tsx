import { ActionIcon, Notification, Grid, List, Stack, Text, TextInput, ThemeIcon } from '@mantine/core';
import {
  IconBeach,
  IconBellRinging,
  IconFileText,
  IconPdf,
  IconPlus,
  IconSchool,
  IconSearch,
  IconTargetArrow,
} from '@tabler/icons-react';
import { UserDashboard } from '../components/users/UserDashboard';
import { InfoBox, InfoBoxProps } from '../components/stats/InfoBox';

interface ProfileInfoBoxProps extends Omit<InfoBoxProps, 'children'> {
  mainText: React.ReactNode;
  subText: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({ mainText, subText, ...rest }) => (
  <InfoBox {...rest}>
    <Text fw={700}>{mainText}</Text>
    <Text size='xs' color='dimmed'>
      {subText}
    </Text>
  </InfoBox>
);

export const DemoPage = () => (
  <Grid>
    <Grid.Col span={8}>
      <UserDashboard user={{ id: '1', role: 'Manager', title: 'Mr.', name: 'Ivan Ivanov', email: 'ii@abv.bg' }} />
    </Grid.Col>
    <Grid.Col span={4}>
      <Stack spacing='xl'>
        <Notification icon={<IconBellRinging size='1.1rem' />} color='red'>
          Please <a href='#'>sign up</a> for medical check ups before August 30th.
        </Notification>

        <ProfileInfoBox
          title='Time Off / days'
          action={
            <ActionIcon size='xs' variant='filled' color='brand' radius='xl'>
              <IconPlus />
            </ActionIcon>
          }
          icon={IconBeach}
          mainText='10 used'
          subText='of 25'
        />
        <ProfileInfoBox title='Courses' icon={IconSchool} mainText='1 pending' subText='2 in progress' />
        <ProfileInfoBox title='Goals' icon={IconTargetArrow} mainText='70%' subText='complete' />

        <InfoBox
          title='Documents'
          action={
            <TextInput
              placeholder='search by document title'
              variant='unstyled'
              size='xs'
              icon={<IconSearch size={14} style={{ flex: 1 }} />}
            />
          }
          icon={IconFileText}
        >
          <List>
            <List.Item
              icon={
                <ThemeIcon size='xs' variant='light'>
                  <IconPdf /> {/* FIXME: use file-type-pdf */}
                </ThemeIcon>
              }
            >
              Document 1
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon size='xs' variant='light'>
                  <IconPdf />
                </ThemeIcon>
              }
            >
              Document 2
            </List.Item>
          </List>
        </InfoBox>
      </Stack>
    </Grid.Col>
  </Grid>
);
