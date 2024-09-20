import { Autocomplete, Select, TextInput, Textarea, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { UserType } from './types';
import { testUsers } from '../../pages/data/users';

interface UserSettingsEditorProps {
  user: UserType;
  onChange: (user: UserType) => void;
}

// TODO: form validation
export const UserSettingsEditor: React.FC<UserSettingsEditorProps> = ({ user }) => (
  <>
    <Title order={3}>Basic Information</Title>
    <TextInput label='Name' />
    <Textarea label='Biography' />

    <Title order={3} mt='xl'>
      Position
    </Title>
    <TextInput label='Employee Identification Number' />
    <Autocomplete
      label='Team'
      data={['Sales', 'Customer Experience', 'C-Level Management', 'HR and Recruitment', 'Delivery']}
    />
    <Autocomplete label='Manager' data={testUsers.map((u) => u.name)} />
    <Select
      label='Contract Type'
      data={['Full-Time', 'Part-Time', 'Fixed-Term', 'Temporary Employement', 'Intership']}
    />
    <DateInput label='Contract Start Date' />
    <DateInput label='Contract End Date' />
    <Select
      label='Title'
      data={[
        'Manager Customer Experience',
        'Senior Customer Experience Specialist',
        'Customer Experience Specialist',
        'Junior Customer Experience Specialist',
      ]}
    />

    <Title order={3} mt='xl'>
      Additional Information
    </Title>
    <Select label='Gender' data={['Male', 'Female', 'Other']} />
    <DateInput label='Birth Date' />
    <TextInput label='Address' />
    <TextInput label='Phone' />
  </>
);
