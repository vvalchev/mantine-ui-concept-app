import { IconCircleCheckFilled } from '@tabler/icons-react';
import { Slider, px, rem } from '@mantine/core';
import { LikertQuestion } from '../types';

export const QuestionViewLikert = ({ question }: { question: LikertQuestion }) => (
  <Slider
    marks={question.labels.map((label, value) => ({
      value,
      label,
    }))}
    min={0}
    max={question.labels.length - 1}
    step={1}
    m={px('4rem')}
    mt='sm'
    color='gray.2'
    size={24}
    thumbSize={32}
    thumbChildren={<IconCircleCheckFilled />}
    styles={(theme) => {
      const colr = theme.colors.lime[7];
      const size = 32;
      return {
        label: {
          display: 'none',
        },
        mark: {
          backgroundColor: 'transparent',
        },
        markFilled: {
          border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        },
        markLabel: {
          marginTop: '1em',
        },
        thumb: {
          color: colr,
          border: 'none',
          svg: {
            fill: colr,
            width: size,
            height: size,
          },
        },
        bar: {
          backgroundColor: 'transparent',
        },
        track: {
          '&::before': {
            backgroundColor: 'transparent',
          },
        },
      };
    }}
  />
);
