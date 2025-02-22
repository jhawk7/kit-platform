import { UserInteraction, UserProgress} from "./UserInteraction";
import { MockVideoInteractions } from "./mock-data/MockVideoInteractions";

export interface UserVideoInteraction extends UserInteraction {
  lastVideoTimeStamp: string;
  lastVideoTimeStampSec: number; //if equal to duration sec; then completed
  videoId: string;
}


export async function allVideoInteractionsByUser(userId: string): Promise<UserVideoInteraction[]> {
  /* Query:
  select * from UserVideoInteraction uv where uv.userId = `userId`
   //should cache this temporarily 
  */

  const userVideoInteractions = MockVideoInteractions.filter((interaction) => (interaction.userId === userId));
  if (userVideoInteractions.length === 0) return [];

  return userVideoInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    lastVideoTimeStamp: interaction?.lastVideoTimeStamp,
    lastVideoTimeStampSec: interaction?.lastVideoTimeStampSec,
    videoId: interaction?.videoId
  }));
}

export async function userVideoBookmarks(userId: string): Promise<string[]> {
  /* Query: select * from UserVideoInteraction uv where uv.userId = `userId` and uv.bookmarked = 1
  */

  const userBookmarkedVideoIds = MockVideoInteractions.filter((interaction) => (interaction.userId === userId 
    && interaction.bookmarked === true)).map((interaction) => (interaction.videoId));

  return userBookmarkedVideoIds
}

export async function userVideoInteraction(userId: string, videoId: string): Promise<UserVideoInteraction> {
  /* Query:
  select * from UserVideoInteraction uv where uv.userId = `userId` and uv.videoId = `videoId`
  // if larger query is not cached
  */
 
  const userVideoInteraction = MockVideoInteractions.find((interaction) => (interaction.userId === userId
    && interaction.videoId == videoId));
  if (!userVideoInteraction) return null;
  
  return {
    interactionId: userVideoInteraction?.interactionId,
    userId: userVideoInteraction?.userId,
    bookmarked: userVideoInteraction?.bookmarked,
    progress: userVideoInteraction?.progress as UserProgress,
    completed: userVideoInteraction?.completed,
    lastAccessed: userVideoInteraction?.lastAccessed,
    lastVideoTimeStamp: userVideoInteraction?.lastVideoTimeStamp,
    lastVideoTimeStampSec: userVideoInteraction?.lastVideoTimeStampSec,
    videoId: userVideoInteraction?.videoId
  };
}

export async function videoInteractions(videoId: string): Promise<UserVideoInteraction[]> {
  /* Query:
  select * from UserVideoInteraction ua where uv.videoId = `videoId`
  */
 
  const videoInteractions = MockVideoInteractions.filter((interaction) => (interaction.videoId === videoId));
  if (videoInteractions.length === 0) return [];

  return videoInteractions.map((interaction) => ({
    interactionId: interaction?.interactionId,
    userId: interaction?.userId,
    bookmarked: interaction?.bookmarked,
    progress: interaction?.progress as UserProgress,
    completed: interaction?.completed,
    lastAccessed: interaction?.lastAccessed,
    lastVideoTimeStamp: interaction?.lastVideoTimeStamp,
    lastVideoTimeStampSec: interaction?.lastVideoTimeStampSec,
    videoId: interaction?.videoId
  }));
}
