import { Checkbox, Divider, NumberInput, Stack, TextInput } from '@mantine/core';
import { AllQuestions } from '../types';
import { QuestionEditorsChoices } from './QuestionEditorsChoices';
import {
  QuestionEditorNumeric,
  QuestionEditorText,
  QuestionEditorTrueFalse,
  QuestionEditorYesNo,
} from './QuestionEditorsSimple';
import { QuestionEditorRange } from './QuestionEditorRange';
import { QuestionEditorsLikert } from './QuestionEditorsLikert';

interface QuestionEditorProps {
  question: AllQuestions;
  onChange: (question: AllQuestions) => void;
}

const getEditor = ({ question, onChange }: QuestionEditorProps) => {
  switch (question.type) {
    case 'text':
      return <QuestionEditorText question={question} onChange={onChange} />;
    case 'numeric':
      return <QuestionEditorNumeric question={question} onChange={onChange} />;
    case 'true_false':
      return <QuestionEditorTrueFalse question={question} onChange={onChange} />;
    case 'yes_no':
      return <QuestionEditorYesNo question={question} onChange={onChange} />;
    case 'checkbox':
    case 'radio':
    case 'dropdown':
      return <QuestionEditorsChoices question={question} onChange={onChange} />;
    case 'range':
      return <QuestionEditorRange question={question} onChange={onChange} />;
    case 'likert':
      return <QuestionEditorsLikert question={question} onChange={onChange} />;
    case 'mood':
    case 'quality':
      return null;
    default:
      return null;
  }
};

export const QuestionEditor: React.FC<QuestionEditorProps> = ({ question, onChange }) => {
  const editor = getEditor({ question, onChange });

  return (
    <Stack>
      <TextInput
        label='Title'
        withAsterisk
        value={question.title}
        onChange={(e) =>
          onChange({
            ...question,
            title: e.target.value,
          })
        }
      />
      <TextInput
        label='Description'
        value={question.text || ''}
        onChange={(e) =>
          onChange({
            ...question,
            text: e.target?.value,
          })
        }
      />
      <NumberInput
        label='Points'
        value={question.points}
        onChange={(e) =>
          onChange({
            ...question,
            points: e === '' ? undefined : e,
          })
        }
      />
      <Checkbox
        label={`Is this question required? ${question.required}`}
        checked={question.required || false}
        onChange={(e) =>
          onChange({
            ...question,
            required: e.target?.checked || false,
          })
        }
      />
      {editor && (
        <>
          <Divider />
          {editor}
        </>
      )}
    </Stack>
  );
};
