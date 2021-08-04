import { ref } from 'vue';
import { IQuiz } from '@/shared/interfaces/quiz';

const quizLists = ref<IQuiz>(
  {
    categories: [
      {
        category: 'Animals',
        quizzes: [
          {
            name: 'Dog Quiz',
            items: [
              {
                id: 1,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 2,
                question: 'What is your dogs name? 2',
                answer: 'dog',
              },
              {
                id: 3,
                question: 'What is your dogs name? 3',
                answer: 'dog',
              },
              {
                id: 4,
                question: 'What is your dogs name? 4',
                answer: 'dog',
              },
            ],
          },
          {
            name: 'Cat Quiz',
            items: [
              {
                id: 1,
                question: 'What is your cats name? 1',
                answer: 'cat',
              },
              {
                id: 2,
                question: 'What is your cats name? 2',
                answer: 'cat',
              },
              {
                id: 3,
                question: 'What is your cats name? 3',
                answer: 'cat',
              },
              {
                id: 4,
                question: 'What is your cats name? 4',
                answer: 'cat',
              },
            ],
          },
        ],
      },
      {
        category: 'History',
        quizzes: [
          {
            name: 'Quiz 1',
            items: [
              {
                id: 1,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 2,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 3,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 4,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
            ],
          },
          {
            name: 'Quiz 2',
            items: [
              {
                id: 1,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 2,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 3,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 4,
                question: 'What is your cats name?',
                answer: 'cat',
              },
            ],
          },
        ],
      },
      {
        category: 'Math',
        quizzes: [
          {
            name: 'Quiz 1',
            items: [
              {
                id: 1,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 2,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 3,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
              {
                id: 4,
                question: 'What is your dogs name?',
                answer: 'dog',
              },
            ],
          },
          {
            name: 'Quiz 2',
            items: [
              {
                id: 1,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 2,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 3,
                question: 'What is your cats name?',
                answer: 'cat',
              },
              {
                id: 4,
                question: 'What is your cats name?',
                answer: 'cat',
              },
            ],
          },
        ],
      },
    ],
  },
);

export default function useStore() {
  const quizList = ref(quizLists);

  return {
    quizList,
  };
}
