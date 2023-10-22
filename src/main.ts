/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-10-15 14:45:33
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-10-22 14:59:42
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import VueClipboards from 'vue-clipboard2';
import './style.css';
import 'mdui/dist/css/mdui.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(VueClipboards);
app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.mount('#app');
