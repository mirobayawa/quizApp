import { RouteRecordRaw } from 'vue-router';
import RouteNames from '@/shared/enums/route-names';
import About from '@/about/views/about.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: RouteNames.About,
    component: About,
  },
];

export default routes;
