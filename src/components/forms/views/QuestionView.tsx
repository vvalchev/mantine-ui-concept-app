import { Card, Group, Badge, Text } from '@mantine/core';
import { IconDeviceFloppy, IconEdit, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { AllQuestions } from '../types';
import { CheckboxQuestionView, DropdownQuestionView, RadioQuestionView } from './QuestionViewsChoices';
import { TextQuestionView, NumericQuestionView, TrueFalseQuestionView, YesNoQuestionView } from './QuestionViewsSimple';
import { RangeQuestionView, SliderQuestionView } from './QuestionViewsSlider';
import { QuestionViewLikert } from './QuestionViewLikert';
import { QuestionEditor } from '../editors/QuestionEditor';
import { StyledActionButton } from '../common/StyledActionButton';
import { QuestionViewMood, QuestionViewQuality } from './QuestionViewMood';

const getView = (question: AllQuestions) => {
  switch (question.type) {
    case 'checkbox':
      return <CheckboxQuestionView question={question} />;
    case 'radio':
      return <RadioQuestionView question={question} />;
    case 'dropdown':
      return <DropdownQuestionView question={question} />;
    case 'text':
      return <TextQuestionView question={question} />;
    case 'numeric':
      return <NumericQuestionView question={question} />;
    case 'true_false':
      return <TrueFalseQuestionView question={question} />;
    case 'yes_no':
      return <YesNoQuestionView question={question} />;
    case 'slider':
      return <SliderQuestionView question={question} />;
    case 'range':
      return <RangeQuestionView question={question} />;
    case 'mood':
      return <QuestionViewMood question={question} />;
    case 'quality':
      return <QuestionViewQuality />;
    case 'likert':
      return <QuestionViewLikert question={question} />;
    default:
      return null;
  }
};

interface QuestionViewProps {
  question: AllQuestions;
  onEdit?: (q: AllQuestions) => JSX.Element;
}

export const QuestionView: React.FC<QuestionViewProps> = ({ question: questionParam, onEdit }) => {
  const [question, setQuestion] = useState(questionParam);
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    if (onEdit) {
      onEdit(question);
    }
  };

  const handleClose = () => {
    setEditMode(false);
    setQuestion(questionParam);
  };

  return (
    <Card>
      <Card.Section py='xs' inheritPadding withBorder>
        <Group position='apart'>
          <Text weight='bold'>{question.title}</Text>
          <Group spacing='xs'>
            {question.points && <Badge size='xs'>{question.points} point(s)</Badge>}
            {question.required && (
              <Badge size='xs' color='red'>
                Required
              </Badge>
            )}
            {!editMode && <StyledActionButton icon={IconEdit} onClick={() => setEditMode(true)} />}
            {editMode && (
              <>
                <StyledActionButton icon={IconDeviceFloppy} onClick={handleSave} />
                <StyledActionButton icon={IconX} onClick={handleClose} />
              </>
            )}
          </Group>
        </Group>
        {question.text && (
          <Text size='sm' color='dimmed'>
            {question.text}
          </Text>
        )}
      </Card.Section>
      <Card.Section py='sm' inheritPadding>
        {editMode ? <QuestionEditor question={question} onChange={setQuestion} /> : getView(question)}
      </Card.Section>
    </Card>
  );
};
