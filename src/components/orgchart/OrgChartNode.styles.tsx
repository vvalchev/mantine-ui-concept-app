import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
  const lineColor = theme.fn.dimmed();
  const lineStroke = theme.lineHeight;
  const spacing = theme.spacing.lg;

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',

      '.node': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column', //v
        padding: `0 ${spacing}`,
      },

      '.node-line': {
        backgroundColor: lineColor,
        height: spacing,
        width: lineStroke,
      },

      '.node-box': {
        // can be customized by user
      },

      // children lines
      '.m-line': {
        width: lineStroke,
        height: lineStroke,
        backgroundColor: lineColor,
      },

      '.lines': {
        flex: 1,
        backgroundColor: lineColor,
        height: lineStroke,
      },

      '.lines-container': {
        display: 'flex',
      },

      // children
      '.children-container': {
        display: 'flex',
        flex: 1,

        '.child': {
          display: 'flex',
          flexDirection: 'column',

          // if the children is last on left, remove the line before middle line
          '&:first-child': {
            '& > .lines-container': {
              '.lines': {
                '&:first-child': {
                  backgroundColor: 'transparent',
                },
              },
            },
          },

          // if the children is last on right, remove the line after middle line
          '&:last-child': {
            '& > .lines-container': {
              '.lines': {
                '&:last-child': {
                  backgroundColor: 'transparent',
                },
              },
            },
          },
        },
      },
    },
  };
});
