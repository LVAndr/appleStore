import { createApp } from 'vue';
import {createPinia} from "pinia";
import router from "./router/index.js";
import App from './App.vue';

import './assets/styles/main.scss'


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
