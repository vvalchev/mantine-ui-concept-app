import { Badge, Card, CardSection, Group, Text } from '@mantine/core';
import useStyles from './PricingCard.styles';

interface PricingCardProps {
  title: string;
  badge?: string;
  description?: string;
  price: string;
  qualifier?: string;
  children?: React.ReactNode;
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, badge, description, price, qualifier, children }) => {
  const { classes } = useStyles();

  return (
    <Card>
      <CardSection className={classes.header}>
        <Group position='apart' color='white'>
          <Text size='xl' weight={900}>
            {title}
          </Text>
          {badge && <Badge variant='light'>{badge}</Badge>}
        </Group>
        {description && <Text size='xs'>{description}</Text>}
      </CardSection>
      <Group align='baseline' spacing={0}>
        <Text size='xl' weight={900}>
          {price}
        </Text>
        {qualifier && <Text>{qualifier}</Text>}
      </Group>
      {children}
    </Card>
  );
};
