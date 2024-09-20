import { IconBeach, IconSchool, IconTargetArrow } from '@tabler/icons-react';
import { Button, SimpleGrid, Text } from '@mantine/core';
import { InfoBoxProps, InfoBox } from '../stats/InfoBox';
import { UserType } from './types';

interface ProfileInfoBoxProps extends Omit<InfoBoxProps, 'children'> {
  mainText: React.ReactNode;
  subText: React.ReactNode;
}
const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({ mainText, subText, ...rest }) => (
  <InfoBox {...rest}>
    <Text fw={700}>{mainText}</Text>
    <Text size='xs' color='dimmed'>
      {subText}
    </Text>
  </InfoBox>
);

interface UserStatsProps {
  user: UserType;
}

// FIXME: get info from user
export const UserStats: React.FC<UserStatsProps> = ({ user }) => (
  <SimpleGrid
    cols={3}
    breakpoints={[
      { maxWidth: 'lg', cols: 2 },
      { maxWidth: 'sm', cols: 1 },
    ]}
  >
    <ProfileInfoBox title='Time Off / days' icon={IconBeach} mainText='10 used' subText='of 25' />
    <ProfileInfoBox title='Time Off / requests' icon={IconBeach} mainText='1' subText='pending' />
    <ProfileInfoBox title='Courses' icon={IconSchool} mainText='1 pending' subText='20 passed' />
    <ProfileInfoBox title='Goals' icon={IconTargetArrow} mainText='70%' subText='complete' />
  </SimpleGrid>
);
