import routes from '@/quiz/routes';
import { IModuleParams } from '@/shared/interfaces/IModule';
import { RouteRecordRaw } from 'vue-router';

export default function quizModule(moduleOptions: IModuleParams): void {
  const { router } = moduleOptions;
  routes.map((route: RouteRecordRaw) => router.addRoute(route));
}
