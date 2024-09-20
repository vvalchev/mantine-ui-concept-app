import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'dark', color: theme.primaryColor });

  return {
    header: {
      padding: theme.spacing.md,
      backgroundColor: colors.background,
      color: colors.color,
      marginBottom: theme.spacing.xs,
    },
  };
});
