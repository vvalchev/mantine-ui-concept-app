import { Center, Checkbox, Table, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPlus } from '@tabler/icons-react';
import { useEffect } from 'react';
import { ChoicesQuestion } from '../types';
import { StyledActionButton } from '../common/StyledActionButton';
import { formActions } from './QuestionEditorsLikert';

interface FormOption {
  text: string;
  correct: boolean;
}
interface FormValue {
  data: FormOption[];
}

const toFormValue = (question: ChoicesQuestion): FormOption[] =>
  question.options.map((option, index) => ({
    text: option,
    correct: question.correct_answer?.includes(index) || false,
  }));

interface QuestionEditorsChoicesProps {
  question: ChoicesQuestion;
  onChange: (question: ChoicesQuestion) => void;
}

export const QuestionEditorsChoices: React.FC<QuestionEditorsChoicesProps> = ({ question, onChange }) => {
  const form = useForm<FormValue>({
    validateInputOnChange: true,
    initialValues: {
      data: toFormValue(question),
    },
    validate: {
      data: {
        text: (value) => (value ? null : 'The option must have a text'),
        correct: (_, values) =>
          question.type === 'radio' && values.data.filter(({ correct }) => correct).length > 1 ? '!' : null,
      },
    },
  });

  const fields = form.values.data.map((value, index, array) => (
    <tr key={`${index}`}>
      <td>
        <Center>
          <Checkbox name='correct_answers' checked={value.correct} {...form.getInputProps(`data.${index}.correct`)} />
        </Center>
      </td>
      <td>
        <TextInput name='options' {...form.getInputProps(`data.${index}.text`)} />
      </td>
      <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {formActions(form, index, array.length)}
      </td>
    </tr>
  ));

  // handle changes
  useEffect(() => {
    const options = form.values.data.map(({ text }) => text);
    const correct_answer = form.values.data
      .map(({ correct }, index) => (correct ? index : -1))
      .filter((number) => number >= 0);
    onChange({ ...question, options, correct_answer });
  }, [form.values]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Correct</th>
          <th style={{ width: '100%' }}>Option</th>
          <th align='center'>
            <StyledActionButton
              icon={IconPlus}
              onClick={() => form.insertListItem('data', { text: '', correct: false })}
            />
          </th>
        </tr>
      </thead>
      <tbody>{fields}</tbody>
    </Table>
  );
};
