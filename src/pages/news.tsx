import { ActionIcon, Affix, ScrollArea, SimpleGrid, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { testArticles } from './data/articles';
import { Article } from '../components/article/Article';

export const NewsPage = () => (
  <>
    <ScrollArea>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'xl', cols: 3 },
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'sm', cols: 1 },
        ]}
      >
        {testArticles.map((article) => (
          <Link key={article.id} to={article.id} relative='route' style={{ textDecoration: 'none' }}>
            <Article key={article.id} data={article} />
          </Link>
        ))}
      </SimpleGrid>
    </ScrollArea>

    <Affix position={{ bottom: rem(30), right: rem(30) }}>
      <ActionIcon color='brand' variant='filled' size='xl' radius='xl'>
        <IconPlus />
      </ActionIcon>
    </Affix>
  </>
);
