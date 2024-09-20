import { MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride, px, rem } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useToggle } from '@mantine/hooks';

import AllRoutes from './routes';
import { ApplicationContextProvider } from './contexts/ApplicationContext';

const defaultTheme: MantineThemeOverride = {
  primaryColor: 'brand',
  fontFamily:
    "'Kelson', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif",
  colors: {
    brand: [
      '#cdc6e1',
      '#bdb3d7',
      '#aca0cd',
      '#9b8dc2',
      '#8b7ab8',
      '#7a67ae',
      '#6a54a4',
      '#59419a',
      '#503b8b',
      '#47347b',
    ],
  },
  globalStyles: (theme) => ({
    '.hiddenMobile': {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
    '.hiddenDesktop': {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
    a: {
      color: theme.colors.brand[theme.colorScheme === 'dark' ? 2 : 6],
    },
  }),
  components: {
    Card: {
      styles: (theme) => ({
        root: {
          boxShadow: theme.shadows.md,
          borderRadius: theme.fn.radius('md'),
        },
      }),
    },
    Table: {
      styles: () => ({
        root: {
          '& > thead > tr > th, & > tfoot > tr > th, & > tbody > tr > th': {
            textTransform: 'uppercase',
          },
        },
      }),
    },
  },
};

export default function App() {
  const [colorScheme, toggleColorScheme] = useToggle<ColorScheme>(['light', 'dark']);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          ...defaultTheme,
          colorScheme,
        }}
      >
        <ApplicationContextProvider>
          <Notifications />
          <AllRoutes />
        </ApplicationContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
