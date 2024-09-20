import { ActionIcon, Affix, Menu, Stack, rem } from '@mantine/core';

import {
  Icon,
  Icon123,
  IconAlertTriangle,
  IconAntennaBars1,
  IconCheckbox,
  IconChevronLeft,
  IconClock,
  IconClockQuestion,
  IconForms,
  IconListCheck,
  IconListDetails,
  IconMoodHappy,
  IconPlus,
  IconSelect,
  IconStar,
  IconToggleLeft,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { testQuestions } from './data/forms';
import { QuestionView } from '../components/forms/views/QuestionView';
import { AllQuestions } from '../components/forms/types';

interface MenuItem {
  type: AllQuestions['type'];
  label: string;
  icon?: Icon;
  template?: Partial<AllQuestions>;
}
const menus: Record<string, MenuItem[]> = {
  'Simple Questions': [
    { type: 'text', label: 'Text', icon: IconForms },
    { type: 'numeric', label: 'Numeric', icon: Icon123 },
    { type: 'true_false', label: 'True or False', icon: IconToggleLeft },
    { type: 'yes_no', label: 'Yes or No', icon: IconToggleLeft },
  ],
  'Multiple Questions': [
    { type: 'checkbox', label: 'Checkbox', icon: IconListCheck, template: { options: [] } },
    { type: 'radio', label: 'Radio', icon: IconListDetails, template: { options: [] } },
    { type: 'dropdown', label: 'Dropdown', icon: IconSelect, template: { options: [] } },
  ],
  'Slider and Range Questions': [
    { type: 'slider', label: 'Slider', icon: IconAntennaBars1, template: { marks: [] } },
    { type: 'range', label: 'Range', icon: IconAntennaBars1, template: { min: 1, max: 10, step: 1 } },
  ],
  'Likert Scale Questions': [
    { type: 'quality', label: 'Quality/Rating', icon: IconStar },
    { type: 'mood', label: 'Mood', icon: IconMoodHappy },
    {
      type: 'likert',
      label: 'Agreement',
      icon: IconCheckbox,
      template: {
        title: 'Do you agree that...?',
        labels: ['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
      },
    },
    {
      type: 'likert',
      label: 'Frequency',
      icon: IconClock,
      template: {
        title: 'How often do you ...?',
        labels: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'],
      },
    },
    {
      type: 'likert',
      label: 'Importance',
      icon: IconAlertTriangle,
      template: {
        title: 'How important for you is ...?',
        labels: ['Very Important', 'Important', 'Moderately Important', 'Slightly Important', 'Unimportant'],
      },
    },
    {
      type: 'likert',
      label: 'Likelihood',
      icon: IconClockQuestion,
      template: {
        title: 'Would you recommend/share ...',
        labels: ['Definitely', 'Probably', 'Possibly', 'Probably Not', 'Definitely Not'],
      },
    },
  ],
};

export const FormsPage = () => {
  const [questions, setQuestions] = useState(testQuestions);

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ duration: 0 });

  const handleAddQuestion = (item: MenuItem) => {
    const newItem = {
      // these can be overriden by the template
      title: 'Ask me something?',
      text: 'Add description here!',
      ...item.template,
      type: item.type, // always set the type
    } as AllQuestions;
    setQuestions((old) => [...old, newItem]);
    scrollIntoView({ alignment: 'end' });
  };

  return (
    <>
      <Stack spacing='xl'>
        {questions.map((q) => (
          <QuestionView key={q.id} question={q} />
        ))}
      </Stack>
      <div ref={targetRef} style={{ paddingTop: '4em' }} />
      <Menu position='top-end'>
        <Menu.Target>
          <Affix position={{ bottom: rem(30), right: rem(30) }}>
            <ActionIcon color='brand' variant='filled' size='xl' radius='xl'>
              <IconPlus />
            </ActionIcon>
          </Affix>
        </Menu.Target>
        <Menu.Dropdown>
          {Object.entries(menus).map(([category, sub]) => (
            <Menu key={category} shadow='md' width={200} trigger='hover' position='left-end' withinPortal>
              <Menu.Target>
                <Menu.Item icon={<IconChevronLeft size={16} />}>{category}</Menu.Item>
              </Menu.Target>
              <Menu.Dropdown>
                {sub.map((e) => (
                  <Menu.Item key={e.type} icon={e.icon && <e.icon size={16} />} onClick={() => handleAddQuestion(e)}>
                    {e.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
