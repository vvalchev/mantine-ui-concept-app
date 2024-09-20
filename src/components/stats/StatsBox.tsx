import { Text, px } from '@mantine/core';
import { Icon as TablerIcon, IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { InfoBox } from './InfoBox';

interface StatsBoxProps {
  title: string;
  icon: TablerIcon;
  value: string;
  diff: number;
}

export const StatsBox: React.FC<StatsBoxProps> = ({ title, icon, value, diff }) => {
  const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <InfoBox title={title} icon={icon} info='Compared to previous month'>
      <Text fw={700}>{value}</Text>
      <Text color={diff > 0 ? 'teal' : 'red'} size='sm'>
        <span>{diff}%</span>
        <DiffIcon size={px('1rem')} />
      </Text>
    </InfoBox>
  );
};
