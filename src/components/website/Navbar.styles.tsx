import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    borderBottomStyle: 'solid',
    borderBottomWidth: rem(1),
  },
  footer: {
    paddingTop: theme.spacing.md,
    borderTopStyle: 'solid',
    borderTopWidth: rem(1),
  },
  small: {
    fontSize: '0.5rem',
  },
}));
