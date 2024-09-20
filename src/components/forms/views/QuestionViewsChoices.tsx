import { Checkbox, Radio, Select } from '@mantine/core';
import { ChoicesQuestion } from '../types';

export const CheckboxQuestionView = ({ question }: { question: ChoicesQuestion }) => (
  <Checkbox.Group>
    {question.options.map((opt) => (
      <Checkbox key={opt} value={opt} label={opt} mt='xs' />
    ))}
  </Checkbox.Group>
);

export const RadioQuestionView = ({ question }: { question: ChoicesQuestion }) => (
  <Radio.Group>
    {question.options.map((opt) => (
      <Radio key={opt} value={opt} label={opt} mt='xs' />
    ))}
  </Radio.Group>
);

export const DropdownQuestionView = ({ question }: { question: ChoicesQuestion }) => (
  <Select data={question.options} withinPortal />
);
