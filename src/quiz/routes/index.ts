import { RouteRecordRaw } from 'vue-router';
import RouteNames from '@/shared/enums/route-names';
import Home from '@/quiz/views/quiz.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/quiz',
    name: RouteNames.Quiz,
    component: Home,
  },
];

export default routes;
