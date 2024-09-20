import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppShell } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

import { Header } from './Header';
import { Navbar } from './Navbar';

export interface ShellProps {
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
  const [opened, toggleOpened] = useToggle([true, false]);
  const location = useLocation();

  useEffect(() => {
    toggleOpened(false);
  }, [location]);

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar opened={opened} />}
      header={<Header drawerOpened={opened} toggleDrawer={toggleOpened} />}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
