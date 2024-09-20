/* eslint-disable @typescript-eslint/no-unused-vars */
import { Group, NumberInput, Switch, TextInput, Textarea } from '@mantine/core';
import { SimpleQuestion } from '../types';

export const TextQuestionView = ({ question }: { question: SimpleQuestion }) => <Textarea />;

export const NumericQuestionView = ({ question }: { question: SimpleQuestion }) => <NumberInput type='number' />;

export const TrueFalseQuestionView = ({ question }: { question: SimpleQuestion }) => (
  <Group position='center'>
    <Switch size='xl' onLabel='True' offLabel='False' />
  </Group>
);

export const YesNoQuestionView = ({ question }: { question: SimpleQuestion }) => (
  <Group position='center'>
    <Switch size='xl' onLabel='Yes' offLabel='No' />
  </Group>
);
