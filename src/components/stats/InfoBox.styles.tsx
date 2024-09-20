import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.gray,
    width: '1rem',
    height: '1rem',
  },

  title: {
    fontSize: theme.fontSizes.xs,
    fontWeight: 'bolder',
    textTransform: 'uppercase',
  },

  text: {
    alignItems: 'end',
    fontSize: 24,
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xl,
    lineHeight: 1,

    // align items to the bottom
    '*': {
      lineHeight: 1,
    },
  },

  info: {
    fontSize: theme.fontSizes.xs,
    color: theme.fn.dimmed(),
    marginTop: theme.spacing.xs,
  },
}));
