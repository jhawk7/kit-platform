import { UserArticleInteraction } from "../models/UserArticleInteraction";
import { UserVideoInteraction } from "../models/UserVideoInteraction";
import { UserQuizInteraction } from "../models/UserQuizInteraction";

export interface UserActivity {
  userId: string;
  userArticles?: UserArticleInteraction[];
  userVideos?: UserVideoInteraction[];
  userQuizzes?: UserQuizInteraction[];
}

export interface UserBookmarks {
  userId: string,
  userArticleBookmarks?: string[];
  userVideoBookmarks?: string[];
  userQuizBookmarks?: string[];
}

export interface ContentInteraction {
  articleInteractions?: UserArticleInteraction[];
  videoInteractions?: UserVideoInteraction[];
  quizInteractions?: UserQuizInteraction[];
}

export enum ContentType {
  ARTICLE = "ARTICLE",
  VIDEO = "VIDEO",
  QUIZ = "QUIZ"
}

export class UserActivityError {
  constructor(public message: string) {}
}