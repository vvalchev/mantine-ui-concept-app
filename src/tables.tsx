import { ActionIcon, Card, Group, ScrollArea, Table, TextInput, UnstyledButton, Text, rem } from '@mantine/core';
import {
  IconChevronDown,
  IconChevronUp,
  IconPencil,
  IconPlus,
  IconSearch,
  IconSelector,
  IconTrash,
} from '@tabler/icons-react';

const data = [
  {
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
  },
  {
    name: 'Deangelo Runolfsson',
    company: 'Greenfelder - Krajcik',
    email: 'Kadin_Trantow87@yahoo.com',
  },
  {
    name: 'Danny Carter',
    company: 'Kohler and Sons',
    email: 'Marina3@hotmail.com',
  },
  {
    name: 'Trace Tremblay PhD',
    company: 'Crona, Aufderhar and Senger',
    email: 'Antonina.Pouros@yahoo.com',
  },
  {
    name: 'Derek Dibbert',
    company: 'Gottlieb LLC',
    email: 'Abagail29@hotmail.com',
  },
  {
    name: 'Viola Bernhard',
    company: 'Funk, Rohan and Kreiger',
    email: 'Jamie23@hotmail.com',
  },
  {
    name: 'Austin Jacobi',
    company: 'Botsford - Corwin',
    email: 'Genesis42@yahoo.com',
  },
  {
    name: 'Hershel Mosciski',
    company: 'Okuneva, Farrell and Kilback',
    email: 'Idella.Stehr28@yahoo.com',
  },
  {
    name: 'Mylene Ebert',
    company: 'Kirlin and Sons',
    email: 'Hildegard17@hotmail.com',
  },
  {
    name: 'Lou Trantow',
    company: 'Parisian - Lemke',
    email: 'Hillard.Barrows1@hotmail.com',
  },
  {
    name: 'Dariana Weimann',
    company: 'Schowalter - Donnelly',
    email: 'Colleen80@gmail.com',
  },
  {
    name: 'Dr. Christy Herman',
    company: 'VonRueden - Labadie',
    email: 'Lilyan98@gmail.com',
  },
  {
    name: 'Katelin Schuster',
    company: 'Jacobson - Smitham',
    email: 'Erich_Brekke76@gmail.com',
  },
  {
    name: 'Melyna Macejkovic',
    company: 'Schuster LLC',
    email: 'Kylee4@yahoo.com',
  },
  {
    name: 'Pinkie Rice',
    company: 'Wolf, Trantow and Zulauf',
    email: 'Fiona.Kutch@hotmail.com',
  },
  {
    name: 'Brain Kreiger',
    company: 'Lueilwitz Group',
    email: 'Rico98@hotmail.com',
  },
];

interface ThProps {
  children: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
}

const Th = ({ children, reversed = false, sorted = false }: ThProps) => {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th>
      <UnstyledButton>
        <Group position='apart'>
          <Text fw={500} fz='sm'>
            {children}
          </Text>
          <Icon style={{ width: rem(16), height: rem(16) }} />
        </Group>
      </UnstyledButton>
    </th>
  );
};

export const TablesPage = () => (
  <ScrollArea h={250}>
    <Card>
      <Group position='apart'>
        <TextInput
          placeholder='Search by any field'
          rightSection={<IconSearch style={{ width: rem(16), height: rem(16) }} />}
        />
        <ActionIcon variant='filled' radius='xl' color='primary'>
          <IconPlus style={{ width: rem(16), height: rem(16) }} />
        </ActionIcon>
      </Group>
      <Table horizontalSpacing='md' verticalSpacing='xs' miw={700} highlightOnHover striped>
        <thead>
          <tr>
            <Th reversed sorted>
              Name
            </Th>
            <Th>Email</Th>
            <Th>Company</Th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.name}>
              <td>{el.name}</td>
              <td>{el.company}</td>
              <td>{el.email}</td>
              <td style={{ display: 'flex', gap: '.5rem' }}>
                <ActionIcon variant='filled' radius='xl' color='primary'>
                  <IconPencil style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
                <ActionIcon variant='filled' radius='xl' color='red'>
                  <IconTrash style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  </ScrollArea>
);
