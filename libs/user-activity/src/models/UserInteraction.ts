export enum UserProgress {
  ASSIGNED = "ASSIGNED",
  INPROGRESS = "INPROGRESS",
  COMPLETED = "COMPLETED"
}

export interface UserInteraction {
  interactionId: string;
  userId: string;
  bookmarked: boolean;
  progress: UserProgress;
  completed: boolean;
  lastAccessed: string;
}
