// const { roomId } = useParams();

import { useParams } from 'react-router-dom';

import { testArticles } from './data/articles';
import { Article } from '../components/article/Article';

export const NewsIdPage = () => {
  const { newsId } = useParams();
  const data = testArticles.find((r) => r.id === newsId);

  return data && <Article data={data} showContent />;
};
