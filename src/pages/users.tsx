import { useState, useRef, useEffect } from 'react';
import {
  ActionIcon,
  Affix,
  Center,
  Checkbox,
  Group,
  Kbd,
  ScrollArea,
  SegmentedControl,
  Select,
  TextInput,
  px,
  rem,
} from '@mantine/core';
import { IconLayoutGrid, IconPlus, IconSearch, IconTable } from '@tabler/icons-react';
import { useHotkeys } from '@mantine/hooks';
import { testUsers } from './data/users';
import { UserRoles } from '../components/users/types';
import { UsersGridView } from '../components/users/UsersGridView';
import { UsersTableView } from '../components/users/UsersTableView';

const layoutTypes = [
  {
    value: 'table',
    label: (
      <Center>
        <IconTable />
      </Center>
    ),
  },
  {
    value: 'grid',
    label: (
      <Center>
        <IconLayoutGrid />
      </Center>
    ),
  },
];

export const UsersPage = () => {
  const [users, setUsers] = useState(testUsers);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [layout, setLayout] = useState(layoutTypes[0].value);
  const [handle, setHandle] = useState<any>(null);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchHotkey = () => {
    searchRef?.current?.focus();
  };

  useHotkeys([['/', handleSearchHotkey]]);

  useEffect(() => {
    const _search = search.toLowerCase();
    const filtered = testUsers
      .filter(({ name, email }) => name.toLowerCase().includes(_search) || email.toLowerCase().includes(_search))
      .filter(({ role }) => filterRole === '' || role === filterRole);
    setUsers(filtered);
  }, [filterRole, search]);

  return (
    <>
      <Checkbox
        label='Enable admin view'
        checked={handle !== null}
        onChange={(event) => {
          setHandle(event.currentTarget.checked ? () => console.log : null);
        }}
      />
      <Group>
        <TextInput
          ref={searchRef}
          placeholder='Search by name or email'
          icon={<IconSearch size={px('0.9rem')} stroke={1.5} />}
          rightSection={<Kbd size='xs'>/</Kbd>}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{
            flex: 1,
          }}
        />
        <Select
          placeholder='Filter by role'
          searchable
          clearable
          onSearchChange={setFilterRole}
          searchValue={filterRole}
          data={UserRoles}
        />

        <SegmentedControl size='xs' transitionDuration={500} value={layout} onChange={setLayout} data={layoutTypes} />
      </Group>
      <ScrollArea mt='xl'>
        {layout === 'grid' && <UsersGridView users={users} />}
        {layout !== 'grid' && <UsersTableView users={users} onDelete={handle} onEdit={handle} onRoleChange={handle} />}
      </ScrollArea>
      {handle && (
        <Affix position={{ bottom: rem(30), right: rem(30) }}>
          <ActionIcon color='brand' variant='filled' size='xl' radius='xl'>
            <IconPlus />
          </ActionIcon>
        </Affix>
      )}
    </>
  );
};
