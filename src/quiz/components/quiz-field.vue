<template>
  <div class="mt-5 w-3/4 h-5/6 border-2 rounded-xl text-xl font-semibold flex flex-col justify-start items-center">
    <span class="mt-2">
      {{ quiz.name }}
    </span>
    <div v-if="!isStarted" class="w-full h-full">
      <button @click="isStarted=true" class="text-white text-xl bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-300 w-2/5 mt-20 justify-self-end">
        Start Quiz...
      </button>
    </div>
    <div v-else class="w-full h-full mt-16 flex flex-col items-center space-y-10">
      <span v-if="quiz.items.length >= itemNo" class="text-xl font-bold self-start ml-5">
        Question # {{ quiz.items[itemNo].id }}
      </span>
      <span class="text-xl font-semibold mx-5">
        {{ quiz.items[itemNo].question }}
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor dui et tincidunt bibendum. Morbi viverra consequat nibh, et laoreet risus? -->
      </span>
      <input type="text" name="quiz-answer" id="quiz-answer" class="w-1/2 h-12 rounded-lg sm:text-sm border-2 shadow-lg
       border-blue-300 text-center outline-none" placeholder="Input your answer here.." />
    </div>
    <div class="w-full h-28 mt-16 flex bg-gray-100 justify-between">
      <span class="text-xl font-bold ml-3 mt-5 text-blue-400">
        00:00:00
      </span>
      <div class="m-3">
        <button class=" text-xl bg-blue-400 border-2 border-blue-400 px-5 py-1 rounded-lg"
         @click="setPreviousItem(quiz.items)">
          <span class="text-white">Previous</span>
        </button>
        <button class="text-blue-400 text-xl bg-white border-2 border-blue-400 px-5 py-1 rounded-lg m-3"
          @click="setNextItem(quiz.items)">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from "vue";
import useStore from '@/shared/composables/use-store';
import { Quiz } from "@/shared/interfaces/quiz";
import { Item } from "@/shared/interfaces/quiz";

export default defineComponent({
  name: 'QuizField',
  props: {
    quiz: {
      type: Object as PropType<Quiz>,
      required: true,
    },
  },
  setup() {
    const { quizList } = useStore();
    const isStarted = ref(false);

    const itemNo = ref(0);

    function setNextItem(items: Item[]) {
      if (items.length > itemNo.value) {
        itemNo.value += 1;
      }
      console.log(items.length >= itemNo.value);
      console.log(itemNo.value);
    }

    function setPreviousItem(items: Item[]) {
      if (itemNo.value > 0) {
        itemNo.value -= 1;
      }
      console.log(items.length > 0);
      console.log(itemNo.value);
    }

    return {
      isStarted,
      quizList,
      itemNo,
      setNextItem,
      setPreviousItem,
    }
  },
});
</script>
