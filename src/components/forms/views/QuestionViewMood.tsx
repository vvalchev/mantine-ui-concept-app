import { Group, Rating, Stack, Text, px, useMantineTheme } from '@mantine/core';
import { IconMoodAngry, IconMoodCry, IconMoodEmpty, IconMoodSmile, IconMoodHappy } from '@tabler/icons-react';
import { MoodQuestion } from '../types';

const withDefaultLabels = (defaults: string[], labels?: string[] | undefined) =>
  labels && labels.length === 5 ? labels : defaults;

const MoodQuestionIconSmall = 64;
const MoodQuestionIconBig = MoodQuestionIconSmall + 32;

export const QuestionViewMood = ({ question }: { question: MoodQuestion }) => {
  const labels = withDefaultLabels(['Angry', 'Upset', 'Neutral', 'Happy', 'Excited'], question.labels);
  const icons = [IconMoodAngry, IconMoodCry, IconMoodEmpty, IconMoodSmile, IconMoodHappy];
  const { colors } = useMantineTheme();
  const palette = [colors.red[7], colors.orange[7], colors.yellow[7], colors.lime[7], colors.green[7]];

  const emptySymbol = (i: number) => {
    if (i === 0) return null;
    const Component = icons[i - 1];
    return <Component color={palette[i - 1]} size={MoodQuestionIconSmall} />;
  };
  const fullSymbol = (i: number) => {
    if (i === 0) return null;
    const Component = icons[i - 1];
    return (
      <Stack align='center' spacing={0} m={0} p={0}>
        <Component
          color={palette[i - 1]}
          size={MoodQuestionIconBig}
          style={{ marginTop: (MoodQuestionIconSmall - MoodQuestionIconBig) / 2 }}
        />
        <Text size='xs' color='dimmed'>
          {labels[i - 1]}
        </Text>
      </Stack>
    );
  };

  return (
    <Group position='center'>
      <Rating
        count={icons.length}
        mih={MoodQuestionIconBig + px('1rem')}
        emptySymbol={emptySymbol}
        fullSymbol={fullSymbol}
        getSymbolLabel={(i: number) => labels[i]}
        highlightSelectedOnly
      />
    </Group>
  );
};

export const QuestionViewQuality = () => (
  <Group position='center'>
    {/* @ts-expect-error */}
    <Rating size={MoodQuestionIconSmall} />
  </Group>
);
