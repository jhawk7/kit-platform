import { UserArticleInteraction } from "../models/UserArticleInteraction";
import { UserVideoInteraction } from "../models/UserVideoInteraction";
import { UserQuizInteraction } from "../models/UserQuizInteraction";
import { Article } from "../models/Article";
import { Video } from "../models/Video";
import { Quiz } from "../models/Quiz";

export interface UserActivity {
  userId: string;
  userArticles?: UserArticleInteraction[];
  userVideos?: UserVideoInteraction[];
  userQuizzes?: UserQuizInteraction[];
}

export interface UserBookmarks {
  userId: string,
  userArticleBookmarks?: Article[];
  userVideoBookmarks?: Video[];
  userQuizBookmarks?: Quiz[];
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