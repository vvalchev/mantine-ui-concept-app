import { ReactNode } from 'react';
import { Button, Center, Grid, Title, List, ThemeIcon, Table, Group, SimpleGrid } from '@mantine/core';
import {
  Icon360View,
  IconCheck,
  IconFileText,
  IconMail,
  IconMessage,
  IconNews,
  IconSchool,
  IconSchoolBell,
  IconSchoolOff,
  IconServer,
  IconUser,
  IconUserHeart,
} from '@tabler/icons-react';
import { PricingCard } from '../components/pricing/PricingCard';
import { StatsBox } from '../components/stats/StatsBox';

interface CheckBoxListProps {
  children: ReactNode;
}

const CheckBoxList = ({ children }: CheckBoxListProps) => (
  <List
    size='sm'
    center
    icon={
      <ThemeIcon size={16} radius='xl' variant='filledx' color='brand'>
        <IconCheck size={16} />
      </ThemeIcon>
    }
  >
    {children}
  </List>
);

const FreePricingPlan = () => (
  <PricingCard
    title='Starter'
    description='A Starter plan designed for hobbyists and freelancers.'
    price='Free'
    qualifier=' for ever'
  >
    <CheckBoxList>
      <List.Item>5 users</List.Item>
      <List.Item>10 educational resource</List.Item>
      <List.Item>10 documents</List.Item>
      <List.Item>All modules included</List.Item>
    </CheckBoxList>
    <Center pt='md'>
      <Button>Upgrade to Pro</Button>
    </Center>
  </PricingCard>
);

const ProPricingPlan = () => (
  <PricingCard
    title='Pro'
    badge='popular'
    description='A plan designed for small teams, startups and agencies.'
    price='3€'
    qualifier='/per user/per month'
  >
    <CheckBoxList>
      <List.Item>As many users you need</List.Item>
      <List.Item>Up to 100GB storage per 1000 users</List.Item>
      <List.Item>Pay for selected modules</List.Item>
    </CheckBoxList>
  </PricingCard>
);

export const SubscriptionPage = () => (
  <>
    <Grid gutter='xl'>
      <Grid.Col span='auto'>
        <Title order={1}>My Subscription</Title>
        <Table>
          <tbody>
            <tr>
              <th>Monthly Price</th>
              <td>300€ for 100 users and 3 modules</td>
            </tr>
            <tr>
              <th>Expiration date:</th>
              <td>{new Date().toString()}</td>
            </tr>
            <tr>
              <th>Make Payment:</th>
              <td>
                <Group>
                  <Button variant='outline'>Pay Monthly</Button>
                  <Button variant='outline'>Pay Yearly</Button>
                </Group>
              </td>
            </tr>
          </tbody>
        </Table>

        <Title order={1} pt='xl'>
          Usage Statistics
        </Title>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 'lg', cols: 2 },
            { maxWidth: 'sm', cols: 1 },
          ]}
        >
          <StatsBox title='Total Users' icon={IconUser} value='344' diff={5} />
          <StatsBox title='Active Users' icon={IconUserHeart} value='234' diff={50} />
          <StatsBox title='Documents' icon={IconFileText} value='23' diff={-5} />
          <StatsBox title='Education Resources' icon={IconSchool} value='59' diff={17} />
          <StatsBox title='Passed Courses' icon={IconSchoolBell} value='2001 users' diff={1} />
          <StatsBox title='Failed Courses' icon={IconSchoolOff} value='23 users' diff={0} />
          <StatsBox title='Storage' icon={IconServer} value='2 of 100GB' diff={0.45} />
          <StatsBox title='Chat Messages' icon={IconMessage} value='3440323' diff={3} />
          <StatsBox title='Emails Send' icon={IconMail} value='32333' diff={5} />
          <StatsBox title='News Posted' icon={IconNews} value='233' diff={0} />
          <StatsBox title='Attestations Completed' icon={Icon360View} value='2001 users' diff={1} />
        </SimpleGrid>
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        <FreePricingPlan />
      </Grid.Col>
    </Grid>
  </>
);
