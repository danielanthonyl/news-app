export interface ISource {
  id: string;
  name: string;
}
export interface ICardProps {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}
