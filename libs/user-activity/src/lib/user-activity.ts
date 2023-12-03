import * as articleInteraction from "../models/UserArticleInteraction";
import * as quizInteraction from "../models/UserQuizInteraction";
import * as videoInteraction from "../models/UserVideoInteraction";
import { UserActivity, ContentType, UserActivityError, UserBookmarks, ContentInteraction } from "./types";

export async function userActivity(userId: string, contentType: ContentType): Promise<UserActivity> {
  try {
    const userActivity: UserActivity = {
      userId: userId,
      ...((!contentType || contentType === ContentType.ARTICLE) && {userArticles: await articleInteraction.allArticleInteractionsByUser(userId)}),
      ...((!contentType || contentType === ContentType.VIDEO) && {userVideos: await videoInteraction.allVideoInteractionsByUser(userId)}),
      ...((!contentType || contentType === ContentType.QUIZ) && {userQuizzes: await quizInteraction.allQuizInteractionsByUser(userId)})
    };

    return userActivity;

  } catch (error) {
    throw new UserActivityError(`failed to build UserActivity object ${error}`);
  }
}

export async function userBookmarks(userId: string, contentType: ContentType): Promise<UserBookmarks> {
  try {
    const userBookmarks: UserBookmarks = {
      userId: userId,
      ...((!contentType || contentType === ContentType.ARTICLE) && {userArticleBookmarks: await articleInteraction.userArticleBookmarks(userId)}),
      ...((!contentType || contentType === ContentType.VIDEO) && {userVideoBookmarks: await videoInteraction.userVideoBookmarks(userId)}),
      ...((!contentType || contentType === ContentType.QUIZ) && {userQuizBookmarks: await quizInteraction.userQuizBookmarks(userId)})
    };

    //console.log(`THIS: ${userBookmarks.userArticleBookmarks[0].id}`);
    return userBookmarks;

  } catch (error) {
    throw new UserActivityError(`failed to build UserBookmarks object ${error}`);
  }
}

export async function userInteractionByContentId(userId: string, contentType: ContentType, contentId: string): Promise<UserActivity> {
  try {
   const userActivity: UserActivity = {
      userId: userId,
      ...((contentType === ContentType.ARTICLE) && {userArticles: [await articleInteraction.userArticleInteraction(userId, contentId)]}),
      ...((contentType === ContentType.VIDEO) && {userVideos: [await videoInteraction.userVideoInteraction(userId, contentId)]}),
      ...((contentType === ContentType.QUIZ) && {userQuizzes: [await quizInteraction.userQuizInteraction(userId, contentId)]})
    };

    return userActivity

  } catch (error) {
    throw new UserActivityError(`failed to get UserInteraction for content ${error}`);
  }
}

export async function contentInteraction(contentId: string, contentType: ContentType): Promise<ContentInteraction> {
  try {
    const contentInteraction: ContentInteraction = {
      ...((contentType === ContentType.ARTICLE) && {articleInteractions: await articleInteraction.articleInteractions(contentId)}),
      ...((contentType === ContentType.VIDEO) && {videoInteractions: await videoInteraction.videoInteractions(contentId)}),
      ...((contentType === ContentType.QUIZ) && {quizInteractions: await quizInteraction.quizInteractions(contentId)})
    };
   
    return contentInteraction

  } catch (error) {
    throw new UserActivityError(`failed to build ContentInteraction object ${error}`);
  }
}
