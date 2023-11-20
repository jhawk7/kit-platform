
export const MockVideoInteractions = [
  {
    interactionId: '1',
    userId: '313',
    bookmarked: true,
    progress: "INPROGRESS",
    completed: false,
    lastAccessed: new Date().toISOString(),
    lastVideoTimeStamp: "10:07",
    lastVideoTimeStampSec: 607,
    videoId: '201'
  },
  {
    interactionId: '2',
    userId: '313',
    bookmarked: false,
    progress: "COMPLETED",
    completed: true,
    lastAccessed: new Date().toISOString(),
    lastVideoTimeStamp: "17:23",
    lastVideoTimeStampSec: 1043,
    videoId: '202'
  },
  {
    interactionId: '3',
    userId: '42',
    bookmarked: true,
    progress: "ASSIGNED",
    completed: false,
    lastAccessed: new Date().toISOString(),
    lastVideoTimeStamp: "00:00",
    lastVideoTimeStampSec: 0,
    videoId: '203'
  },
  {
    interactionId: '4',
    userId: '42', //needs index
    bookmarked: true, //needs index
    progress: "INPROGRESS",
    completed: false,
    lastAccessed: new Date().toISOString(),
    lastVideoTimeStamp: "20:07",
    lastVideoTimeStampSec: 1207,
    videoId: '204'
  },
  {
    interactionId: '5',
    userId: '1774',
    bookmarked: true,
    progress: "COMPLETED",
    completed: true,
    lastAccessed: new Date().toISOString(),
    lastVideoTimeStamp: "19:12",
    lastVideoTimeStampSec: 1152,
    videoId: '203'
  }
]