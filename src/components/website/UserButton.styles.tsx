import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'light', color: theme.primaryColor });

  return {
    user: {
      padding: theme.spacing.md,

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),

      '&[data-active]': {
        backgroundColor: colors.background,
        color: colors.color,
        ...theme.fn.hover({ backgroundColor: colors.hover }),
      },
    },
  };
});
