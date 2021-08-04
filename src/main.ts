import { createApp } from 'vue';
import './plugins/styles.css';

import App from '@/app.vue';
import router from '@/router';
import homeModule from './home';
import quizModule from './quiz';
import aboutModule from './about';

const app = createApp(App);

homeModule({ app, router });
quizModule({ app, router });
aboutModule({ app, router });

app.use(router);
app.mount('#app');
