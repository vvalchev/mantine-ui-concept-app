export interface ArticleType {
  id: string; // uuid
  title: string;
  text: string;
  votes: number;
  posted: string; // date
  tags?: string[];
  image?: string; // url
  favourite?: boolean;
}
