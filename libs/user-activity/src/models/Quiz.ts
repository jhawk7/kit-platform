import { MockQuizzes } from "./mock-data/MockQuizzes";
// not sure this services has access to actual content

interface Question {
  id: string;
  questionText: string;
  answerText: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

class QuizError {
  constructor(public message: string) {}
}

export async function quizById(id: string): Promise<Quiz> {
  const quiz = MockQuizzes.find((quiz) => quiz.id === id);
  if(!quiz) throw new QuizError("quiz not found");

  return {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questions: quiz.questions
  }
}