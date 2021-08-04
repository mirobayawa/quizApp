import routes from '@/about/routes';
import { IModuleParams } from '@/shared/interfaces/IModule';
import { RouteRecordRaw } from 'vue-router';

export default function aboutModule(moduleOptions: IModuleParams): void {
  const { router } = moduleOptions;
  routes.map((route: RouteRecordRaw) => router.addRoute(route));
}
