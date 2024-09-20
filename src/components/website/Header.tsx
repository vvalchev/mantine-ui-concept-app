import {
  Header as MHeader,
  Group,
  Burger,
  ActionIcon,
  Tooltip,
  ThemeIcon,
  Title,
  useMantineTheme,
  useMantineColorScheme,
  px,
} from '@mantine/core';
import { IconLogin, IconMoon, IconSun } from '@tabler/icons-react';

interface HeaderProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ drawerOpened, toggleDrawer }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <MHeader height={70} p='md'>
      <Group position='apart'>
        <Burger opened={drawerOpened} onClick={toggleDrawer} className='hiddenDesktop' />
        <ThemeIcon className='hiddenMobile' unstyled>
          <img src='/assets/logo.svg' alt='Logo' width='48px' height='48px' />
        </ThemeIcon>

        <Group spacing='sm'>
          <Tooltip label='Change the theme color' withinPortal>
            <ActionIcon onClick={() => toggleColorScheme()} variant='outline' radius='xl' color={theme.primaryColor}>
              {colorScheme === 'light' ? <IconMoon size={px('1rem')} /> : <IconSun size={px('1rem')} />}
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Logout' withinPortal>
            <ActionIcon variant='outline' radius='xl' color={theme.primaryColor}>
              <IconLogin size={px('1rem')} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </MHeader>
  );
};
