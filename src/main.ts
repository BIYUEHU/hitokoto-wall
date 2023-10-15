/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-10-15 14:45:33
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-10-15 17:11:36
 */
import { createApp } from 'vue';

import './style.css';
import 'mdui/dist/css/mdui.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
