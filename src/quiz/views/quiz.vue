<template>
  <div class="fixed flex w-full h-full">
    <div class="flex flex-wrap justify-start m-5 w-2/12 h-3/4">
      <div class="w-full min-h-3/4 bg-gray-50 rounded-2xl p-2 mx-auto shadow-2xl flex flex-col">
        <div class="flex items-start ml-2 text-blue-500 m-2 border-b-2 border-solid border-blue-100 mb-5">
          <span class="font-bold text-lg">
            Options
          </span>
        </div>
        <div class="mb-1 w-full">
          <Disclosure>
            <DisclosureButton class="flex justify-between w-full px-4 py-2 text-md font-nunito font-bold text-left text-blue-900 bg-blue-100 rounded-lg
            hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Quiz Categories</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-blue-500">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0
                01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="text-gray-500">
              <!-- categories loop here -->
              <button v-if="quizList" v-for="quizCategory in quizList.categories" :key="quizCategory.category" @click="selectedCategory=quizCategory"
               class="flex justify-between w-full px-4 py-2 text-md font-nunito font-bold text-left text-blue-900 bg-gray-100 rounded-lg hover:bg-blue-200
                focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                {{ quizCategory.category }}
              </button>
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div class="mb-1">
          <Disclosure>
            <DisclosureButton class="flex justify-between w-full px-4 py-2 text-md font-nunito font-bold text-left text-blue-900 bg-blue-100 rounded-lg
            hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>Costumize</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-blue-500">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0
                01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="text-gray-500">
              <button class="flex justify-between w-full px-4 py-2 text-md font-nunito font-bold text-left text-blue-900 bg-gray-100 rounded-lg
              hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                Create Quiz
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2
                   2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 w-7/12 h-3/4 rounded-2xl shadow-lg m-5">
      <div class="text-xl font-semibold flex m-5 text-blue-500">
        Category: {{ selectedCategory.category }}
      </div>
      <div class="w-full h-full flex">
        <QuizList :quizList="selectedCategory" @selectedQuiz="setSelectedQuiz"/>
        <QuizField :quiz="selectedQuiz" :items="selectedQuiz.items"/>
      </div>
    </div>
    <div class="bg-gray-50 w-2/12 h-3/4 rounded-2xl shadow-lg m-5 min-h-3/4 p-2 mx-auto flex flex-col">
      <div class="flex items-start ml-2 text-blue-400 m-2 border-b-2 border-solid border-blue-100 mb-5">
        <span class="font-bold text-lg m-auto">
          Leaderboards
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import QuizField from '@/quiz/components/quiz-field.vue';
import QuizList from '@/quiz/components/quiz-list.vue';
import useStore from '@/shared/composables/use-store';
import { Category, Quiz } from '@/shared/interfaces/quiz';

export default defineComponent({
  name: 'Quiz',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    QuizField,
    QuizList,
  },
  setup() {
    const { quizList } = useStore();
    const selectedCategory = ref<Category>({
      category: 'Select Category',
      quizzes: [],
    });
    const selectedQuiz = ref<Quiz>({
      name: '',
      items: [],
    });

    function setSelectedQuiz(data: Quiz) {
      selectedQuiz.value = data;
      console.log(selectedQuiz.value);
    }

    return {
      quizList,
      selectedCategory,
      setSelectedQuiz,
      selectedQuiz,
    }
  }
});
</script>
