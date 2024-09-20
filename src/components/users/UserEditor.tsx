import {
  Avatar,
  Card,
  FileInput,
  Text,
  Image,
  Stack,
  Title,
  Grid,
  Group,
  Button,
  FileButton,
  ActionIcon,
  Popover,
  Indicator,
  TextInput,
  Textarea,
  Select,
  Center,
  Autocomplete,
} from '@mantine/core';
import { IconUpload, IconX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';
import { UserType } from './types';
import { testUsers } from '../../pages/data/users';

interface UserEditorProps {
  user: UserType;
  onChange: (user: UserType) => void;
}
export const UserEditor: React.FC<UserEditorProps> = ({ user }) => {
  console.log(user);
  const [opened, { close, open }] = useDisclosure(false);

  const UploadIcon = (
    <FileButton onChange={() => {}} accept='image/png,image/jpeg'>
      {(props) => (
        <ActionIcon {...props} radius='xl' variant='filled' color='green'>
          <IconUpload size={16} />
        </ActionIcon>
      )}
    </FileButton>
  );

  const RemoveIcon = (
    <ActionIcon radius='xl' variant='filled' color='red'>
      <IconX size={16} />
    </ActionIcon>
  );

  return (
    <form>
      <Title order={1}>LOOK HERE</Title>

      <Title order={3}>Option 1</Title>
      <Stack>
        <Popover position='right' shadow='md'>
          <Popover.Target>
            <Image
              src={user.avatar}
              width={160}
              alt='User Avatar'
              withPlaceholder
              onMouseEnter={open}
              onMouseLeave={close}
            />
          </Popover.Target>
          <Popover.Dropdown style={{ gap: 10, display: 'flex', flexDirection: 'column', padding: 5 }}>
            {UploadIcon}
            {RemoveIcon}
          </Popover.Dropdown>
        </Popover>
        <Text>Click on the image above</Text>

        <Title order={3}>Option 2</Title>
        <Center>
          <Stack spacing='xs'>
            <Group position='center'>
              {/* avatar size == 256 => offset = 40 */}
              <Indicator inline position='bottom-end' size={40} offset={20} label={RemoveIcon} color='transparent'>
                <Indicator inline position='middle-end' size={40} label={UploadIcon} color='transparent'>
                  <Avatar size={128} radius={128} src={user.avatar} alt={user.name} />
                </Indicator>
              </Indicator>
            </Group>
            <Text align='center'>{user.name}</Text>
            <Text align='center' size='sm' color='dimmed'>
              {user.email}
            </Text>
          </Stack>
        </Center>

        <Title order={3}>Option 3</Title>
        <Card w={160}>
          <Card.Section>
            <Image src={user.avatar} width={160} alt='User Avatar' withPlaceholder />
          </Card.Section>
          <Text pt='md' size='xs'>
            The maximum size of the uploaded file is 5MB. Supported file formats: .jpg, .png
          </Text>
          <Group position='center' pt='xl'>
            {UploadIcon}
            {RemoveIcon}
          </Group>
        </Card>

        <Title order={3}>Option 4</Title>
        <Grid bg='dimmed' p='xl'>
          <Grid.Col span={6} style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Avatar size={128} src={user.avatar} alt={user.name} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Card>
              <Title>Change your photo</Title>
              <FileInput placeholder='Your photo' accept='image/png,image/jpeg' icon={<IconUpload size={14} />} />
              <Text size='sm'>The maximum size of the uploaded file is 5MB. Supported file formats: .jpg, .png.</Text>
              <Group position='center'>
                <Button>Save</Button>
                <Button>Remove Photo</Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>

        <Title order={3}>Dont look below</Title>

        <Title>Basic Information</Title>
        <TextInput label='Name' />
        <Textarea label='Biography' />

        <Title>Position Information</Title>
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

        <Title>Additional Information</Title>
        <Select label='Gender' data={['Male', 'Female', 'Other']} />
        <DateInput label='Birth Date' />
        <TextInput label='Address' />
        <TextInput label='Phone' />
      </Stack>
    </form>
  );
};
