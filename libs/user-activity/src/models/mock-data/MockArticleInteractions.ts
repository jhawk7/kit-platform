
export const MockArticleInteractions = [
  {
    interactionId: '1',
    userId: '313', //needs index
    bookmarked: true, //needs index
    progress: "INPROGRESS",
    completed: false,
    lastAccessed: new Date().toISOString(),
    screentimeSec: 0,
    articleId: '100'
  },
  {
    interactionId: '2',
    userId: '313',
    bookmarked: false,
    progress: "COMPLETED",
    completed: true,
    lastAccessed: new Date().toISOString(),
    screentimeSec: 60,
    articleId: '101'
  },
  {
    interactionId: '3',
    userId: '313',
    bookmarked: true,
    progress: "ASSIGNED",
    completed: false,
    lastAccessed: new Date().toISOString(),
    screentimeSec: 0,
    articleId: '102'
  },
  {
    interactionId: '4',
    userId: '42',
    bookmarked: true,
    progress: "INPROGRESS",
    completed: false,
    lastAccessed: new Date().toISOString(),
    screentimeSec: 0,
    articleId: '103'
  },
  {
    interactionId: '5',
    userId: '42',
    bookmarked: true,
    progress: "COMPLETED",
    completed: true,
    lastAccessed: new Date().toISOString(),
    screentimeSec: 60,
    articleId: '102'
  }
]