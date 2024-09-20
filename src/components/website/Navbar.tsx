import { Navbar as Nav, ScrollArea, ThemeIcon, Text, Group, Indicator, px, Divider, ChevronIcon } from '@mantine/core';
import { IconReportMoney, IconMessageCircle, IconCalendar, IconArticle, IconBinaryTree } from '@tabler/icons-react';
import { NavLink as PLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserButton } from './UserButton';
import { NavLink, SimpleNavLink } from './NavLink';
import useStyles from './Navbar.styles';
import { ApplicationContext } from '../../contexts/ApplicationContext';
import { testMessageRooms as rooms } from '../../pages/data/messages';
import { getRoomAttributes } from '../mesages/util';

interface NavbarProps {
  opened: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ opened }) => {
  const { theme, classes } = useStyles();
  const { user } = useContext(ApplicationContext);

  return (
    <Nav hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 320 }}>
      <Nav.Section className={`hiddenDesktop ${classes.header}`}>
        <Group>
          <ThemeIcon unstyled>
            <img src='/assets/logo.svg' alt='Logo' width='24px' height='24px' />
          </ThemeIcon>
          <Text sx={{ fontFamily: 'nasa' }}>Gravital</Text>
        </Group>
      </Nav.Section>
      <Nav.Section grow component={ScrollArea}>
        <SimpleNavLink
          to='/billing'
          label='Billing'
          description='Manage your subscription plan here'
          icon={<IconReportMoney size={px('1rem')} />}
        />

        <SimpleNavLink
          to='/users'
          label='Manage Users'
          description='Lookup and manage users'
          icon={<IconCalendar size={px('1rem')} />}
        />

        <SimpleNavLink to='/news' label='News' description='Stay informed' icon={<IconArticle size={px('1rem')} />} />
        <SimpleNavLink
          to='/forms'
          label='Forms'
          description='Collect feedback'
          icon={<IconCalendar size={px('1rem')} />}
        />
        <SimpleNavLink
          to='/orgchart'
          label='Org Chart'
          description='Explore organisational structure'
          icon={<IconBinaryTree size={px('1rem')} />}
        />

        <NavLink
          to=''
          end
          label='Messages'
          description='Maybe your colleagues have something to say'
          rightSection={<ChevronIcon width='16px' height='16px' style={{ transform: 'rotate(-90deg)' }} />}
          icon={
            <Indicator
              label='3'
              color='pink'
              classNames={{
                indicator: classes.small,
              }}
            >
              <ThemeIcon color={theme.primaryColor} variant='light' radius='xl'>
                <IconMessageCircle size={px('1rem')} />
              </ThemeIcon>
            </Indicator>
          }
        >
          {rooms
            .filter((room) => room.type !== 'private')
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((room) => (
              <NavLink key={room.id} to={`/messages/${room.id}`} end {...getRoomAttributes(room)} />
            ))}
          <Divider my='sm' variant='dotted' />
          {rooms
            .filter((room) => room.type === 'private')
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((room) => (
              <NavLink key={room.id} to={`/messages/${room.id}`} end {...getRoomAttributes(room)} />
            ))}
        </NavLink>
      </Nav.Section>
      <Nav.Section className={classes.footer}>
        <PLink to='/profile' style={{ textDecoration: 'none' }}>
          {({ isActive }) => (user ? <UserButton {...user} active={isActive} /> : null)}
        </PLink>
      </Nav.Section>
    </Nav>
  );
};
