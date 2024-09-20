import { RangeSlider, Slider, rem } from '@mantine/core';
import { RangeQuestion, SliderQuestion } from '../types';

export const SliderQuestionView = ({ question }: { question: SliderQuestion }) => (
  <Slider marks={question.marks} step={question.step ?? 1} mb='xl' label={() => null} />
);

export const RangeQuestionView = ({ question }: { question: RangeQuestion }) => (
  <RangeSlider
    mb='xl'
    min={question.min}
    minRange={question.min}
    maxRange={question.max}
    max={question.max}
    step={question.step ?? 1}
    labelAlwaysOn
    styles={(theme) => ({
      label: {
        top: rem(8),
        backgroundColor: 'transparent',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      },
    })}
  />
);
