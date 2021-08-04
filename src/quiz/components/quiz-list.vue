<template>
  <div class="border-2 w-1/6 h-5/6 m-5 rounded-lg flex flex-col">
    <span class="text-lg font-semibold border-b-2 border-gray-300 mt-2">Quiz List</span>
    <ul class="mt-5 w-full">
      <li v-for="quiz in quizList.quizzes" :key="quiz.name">
        <button @click="setSelectedQuiz(quiz)" :class="[`text-blue-400 text-lg py-1 hover:bg-blue-100 w-full`,
         selectedQuiz == quiz.name ? 'bg-blue-100 disabled:opacity-50': '']">
          {{ quiz.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Category, Quiz } from "@/shared/interfaces/quiz";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: 'QuizList',
  props: {
    quizList: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  emits: ['selectedQuiz'],
  setup(prop, { emit }) {
    const selectedQuiz = ref('');

    function setSelectedQuiz(quiz: Quiz) {
      selectedQuiz.value = quiz.name;
      emit('selectedQuiz', quiz);
    }

    return {
      selectedQuiz,
      setSelectedQuiz,
    }
  },
});
</script>
