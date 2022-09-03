import { App } from 'vue';

import routes from '@/constants/routes';

export default {
  install: (app: App) => {
    app.config.globalProperties.$enumRoutes = routes;
  }
};
