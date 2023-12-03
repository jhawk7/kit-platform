import { UserInteraction, UserProgress} from "./UserInteraction";
import { MockQuizInteractions } from "./mock-data/MockQuizInteractions";

export interface UserQuizInteraction extends UserInteraction {
  submitted: boolean;
  quizId: string;
}

export async function allQuizInteractionsByUser(userId: string): Promise<UserQuizInteraction[]> {
  /* Query:
  select * from UserQuizInteraction uq where uq.userId = `userId`
  // result should be cached temporarily
  */

  const userInteractions = MockQuizInteractions.filter((interaction) => (interaction.userId === userId));
  if (userInteractions.length === 0) return [];

  return userInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    submitted: interaction?.submitted,
    quizId: interaction?.quizId
  }));
}

export async function userQuizBookmarks(userId: string): Promise<string[]> {
  /* Query: select * from UserQuizInteraction uq where uq.userId = `userId` and uq.bookmarked = 1
  */

  const userBookmarkedQuizIds = MockQuizInteractions.filter((interaction) => (interaction.userId === userId 
    && interaction.bookmarked === true)).map((interaction) => (interaction.quizId));
  
  return userBookmarkedQuizIds
}

export async function userQuizInteraction(userId: string, quizId: string): Promise<UserQuizInteraction> {
  /* Query:
  select * from UserQuizInteraction uq where uq.userId = `userId` and uq.quizId = `quizId`
  // if larger query not already cached
  */
 
  const userQuizInteraction = MockQuizInteractions.find((interaction) => (interaction.userId === userId
    && interaction.quizId == quizId));
  if (!userQuizInteraction) return null;
  
  return {
    interactionId: userQuizInteraction?.interactionId,
    userId: userQuizInteraction?.userId,
    bookmarked: userQuizInteraction?.bookmarked,
    progress: userQuizInteraction?.progress as UserProgress,
    completed: userQuizInteraction?.completed,
    lastAccessed: userQuizInteraction?.lastAccessed,
    submitted: userQuizInteraction?.submitted,
    quizId: userQuizInteraction?.quizId
  };
}

export async function quizInteractions(quizId: string): Promise<UserQuizInteraction[]> {
  /* Query:
  select * from UserQuizInteraction uq where uq.quizId = `quizId`
  */
 
  const quizInteractions = MockQuizInteractions.filter((interaction) => (interaction.quizId === quizId));
  if (quizInteractions.length === 0) return [];

  return quizInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    submitted: interaction?.submitted,
    quizId: interaction?.quizId
  }));
}
