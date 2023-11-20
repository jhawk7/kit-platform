import { MockArticles } from "./mock-data/MockArticles";
// not sure this service has access to actual content

export interface Article {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  quizId: string;
}

export async function articleById(id: string): Promise<Article> {
  const article = MockArticles.find((article) => article.id === id);
  if(!article) return null;

  return {
    id: article?.id,
    title: article?.title,
    slug: article?.slug,
    image: article?.image,
    description: article?.description,
    quizId: article?.quizId
  }

}