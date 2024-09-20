import { UseFormReturnType, useForm } from '@mantine/form';
import { IconChevronDown, IconChevronUp, IconPlus, IconTrash } from '@tabler/icons-react';
import { Table, TextInput } from '@mantine/core';
import { useEffect } from 'react';
import { LikertQuestion } from '../types';
import { StyledActionButton } from '../common/StyledActionButton';

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const formActions = (form: UseFormReturnType<any, any>, index: number, size: number) => (
  <>
    <StyledActionButton icon={IconTrash} onClick={() => form.removeListItem('data', index)} />
    <StyledActionButton
      icon={IconChevronUp}
      disabled={index === 0}
      onClick={() => form.reorderListItem('data', { from: index, to: index - 1 })}
    />
    <StyledActionButton
      icon={IconChevronDown}
      disabled={index === size - 1}
      onClick={() => form.reorderListItem('data', { from: index, to: index + 1 })}
    />
  </>
);

interface FormValue {
  data: string[];
}

interface QuestionEditorsLikertProps {
  question: LikertQuestion;
  onChange: (question: LikertQuestion) => void;
}

export const QuestionEditorsLikert: React.FC<QuestionEditorsLikertProps> = ({ question, onChange }) => {
  const form = useForm<FormValue>({
    validateInputOnChange: true,
    initialValues: {
      data: question.labels,
    },
    validate: {
      data: (value) => (value.includes('') ? 'Empty values are not allowed' : null),
    },
  });

  const fields = form.values.data.map((_, index, array) => (
    <tr key={`${index}`}>
      <td>
        <TextInput {...form.getInputProps(`data.${index}`)} />
      </td>
      <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {formActions(form, index, array.length)}
      </td>
    </tr>
  ));

  // handle changes
  useEffect(() => {
    onChange({ ...question, labels: form.values.data });
  }, [form.values]);

  return (
    <Table>
      <thead>
        <tr>
          <th style={{ width: '100%' }}>Label</th>
          <th align='center'>
            <StyledActionButton icon={IconPlus} onClick={() => form.insertListItem('data', '')} />
          </th>
        </tr>
      </thead>
      <tbody>{fields}</tbody>
    </Table>
  );
};
