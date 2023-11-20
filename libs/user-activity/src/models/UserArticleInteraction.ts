import { Article, articleById } from "./Article";
import { UserInteraction, UserProgress} from "./UserInteraction";
import { MockArticleInteractions } from "./mock-data/MockArticleInteractions";

export interface UserArticleInteraction extends UserInteraction {
  screentimeSec: number;  // if estimated screentime satisfied; then complete
  articleId: string;
}
  
export async function allArticleInteractionsByUser(userId: string): Promise<UserArticleInteraction[]> {
  /* Query: select * from UserArticleInteraction ua where ua.userId = `userId`
  // result should be cached temporarily
  */
  const userArticleInteractions = MockArticleInteractions.filter((interaction) => (interaction.userId === userId));
  if (userArticleInteractions.length === 0) return [];

  return userArticleInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    screentimeSec: interaction?.screentimeSec,
    articleId: interaction?.articleId
  }));
}

export async function userArticleBookmarks(userId: string): Promise<Article[]> {
  /* Query: select * from UserArticleInteraction ua inner join Article a on ua.articleId = a.id where ua.userId = `userId` and ua.bookmarked = 1
  // This assumes this services also has access to the article data as well as the user article relationships, otherwise only IDs would be returned
  */

  const userBookmarkedArticleIds = MockArticleInteractions.filter((interaction) => (interaction.userId === userId 
    && interaction.bookmarked === true)).map((interaction) => (interaction.articleId));
  
  const userArticleBookmarks = await Promise.all(userBookmarkedArticleIds.map(async (articleId) => {
    return await articleById(articleId);
  }));

  return userArticleBookmarks
}

export async function userArticleInteraction(userId: string, articleId: string): Promise<UserArticleInteraction> {
  /* Query: select * from UserArticleInteraction ua where ua.userId = `userId` and ua.articleId = `articleId`
  // if larger query not already cached
  */

  const userArticleInteraction = MockArticleInteractions.find((interaction) => (interaction.userId === userId
    && interaction.articleId == articleId));
  if (!userArticleInteraction) return null;
  
  return {
    interactionId: userArticleInteraction?.interactionId,
    userId: userArticleInteraction?.userId,
    bookmarked: userArticleInteraction?.bookmarked,
    progress: userArticleInteraction?.progress as UserProgress,
    completed: userArticleInteraction?.completed,
    lastAccessed: userArticleInteraction?.lastAccessed,
    screentimeSec: userArticleInteraction?.screentimeSec,
    articleId: userArticleInteraction?.articleId
  };
}

export async function articleInteractions(articleId: string): Promise<UserArticleInteraction[]> {
  /* Query: select * from UserArticleInteraction ua where ua.articleId = `articleId`
  */

  const articleInteractions = MockArticleInteractions.filter((interaction) => (interaction.articleId === articleId));
  if (articleInteractions.length === 0) return [];

  return articleInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    screentimeSec: interaction?.screentimeSec,
    articleId: interaction?.articleId
  }));
}
