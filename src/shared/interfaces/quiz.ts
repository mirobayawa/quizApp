export interface Item {
  id: number,
  question: string;
  answer: string;
}

export interface Quiz {
  name: string;
  items: Item[];
}

export interface Category {
  category: string;
  quizzes: Quiz[];
}

export interface IQuiz {
  categories: Category[];
}
