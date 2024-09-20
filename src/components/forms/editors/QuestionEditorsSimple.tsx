import { Group, NumberInput, Switch, Textarea } from '@mantine/core';
import { SimpleQuestion } from '../types';

interface QuestionEditorSimpleProps {
  question: SimpleQuestion;
  onChange: (question: SimpleQuestion) => void;
}

export const QuestionEditorText: React.FC<QuestionEditorSimpleProps> = ({ question, onChange }) => (
  <Textarea
    label='Correct Answer'
    value={question.correct_answer ? `${question.correct_answer}` : ''}
    onChange={(e) => onChange({ ...question, correct_answer: e.currentTarget.value })}
  />
);

export const QuestionEditorNumeric: React.FC<QuestionEditorSimpleProps> = ({ question, onChange }) => (
  <NumberInput
    type='number'
    label='Correct Answer'
    value={parseInt(`${question.correct_answer}`, 10) || ''}
    onChange={(value) => onChange({ ...question, correct_answer: value })}
  />
);

export const QuestionEditorTrueFalse: React.FC<QuestionEditorSimpleProps> = ({ question, onChange }) => (
  <Group position='center'>
    <Switch
      label='Correct Answer (if any)'
      onLabel='True'
      offLabel='False'
      checked={question.correct_answer === 'true'}
      onChange={(e) => onChange({ ...question, correct_answer: `${e.currentTarget.checked}` })}
    />
  </Group>
);

export const QuestionEditorYesNo: React.FC<QuestionEditorSimpleProps> = ({ question, onChange }) => (
  <Group position='center'>
    <Switch
      label='Correct Answer (if any)'
      onLabel='Yes'
      offLabel='No'
      checked={question.correct_answer === 'true'}
      onChange={(e) => onChange({ ...question, correct_answer: `${e.currentTarget.checked}` })}
    />
  </Group>
);
