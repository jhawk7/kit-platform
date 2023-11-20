import { MockVideos } from "./mock-data/MockVideos";
// not sure this services has access to actual content

export interface Video {
  id: string;
  title: string;
  description: string;
  slug: string;
  duration: number;
  image: string;
  youtubeId: string;
  quizId: string;
}

class VideoError {
  constructor(public message: string) {}
}

export async function videoById(id: string): Promise<Video> {
  const video = MockVideos.find((video) => video.id === id);
  if(!video) throw new VideoError("video not found");

  return {
    id: video.id,
    title: video.title,
    slug: video.slug,
    image: video.image,
    description: video.description,
    quizId: video.quizId,
    duration: video.duration,
    youtubeId: video.youtubeId
  }
}