export const MockQuizInteractions = [
  {
    interactionId: '1', 
    userId: '313', //needs index 
    bookmarked: true, // needs index
    progress: "ASSIGNED",
    completed: false,
    lastAccessed: new Date().toISOString(),
    submitted: false,
    quizId: '1'
  },
  {
    interactionId: '2',
    userId: '42',
    bookmarked: false,
    progress: "COMPLETED",
    completed: true,
    lastAccessed: new Date().toISOString(),
    submitted: true,
    quizId: '1'
  },
  {
    interactionId: '3',
    userId: '1774',
    bookmarked: false,
    progress: "ASSIGNED",
    completed: false,
    lastAccessed: new Date().toISOString(),
    submitted: false,
    quizId: '1'
  },
]