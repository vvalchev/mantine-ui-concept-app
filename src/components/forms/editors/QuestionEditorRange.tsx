import { NumberInput } from '@mantine/core';
import { RangeQuestion } from '../types';

interface QuestionEditorRangeProps {
  question: RangeQuestion;
  onChange: (question: RangeQuestion) => void;
}

export const QuestionEditorRange: React.FC<QuestionEditorRangeProps> = ({ question, onChange }) => (
  <>
    <NumberInput
      type='number'
      label='Minimum Value'
      value={question.min}
      onChange={(value) => onChange({ ...question, min: value || 0 })}
    />
    <NumberInput
      type='number'
      label='Maximum Value'
      value={question.max}
      onChange={(value) => onChange({ ...question, max: value || 0 })}
    />
    <NumberInput
      type='number'
      label='Step'
      value={question.step}
      onChange={(value) => onChange({ ...question, step: value || 1 })}
    />
  </>
);
