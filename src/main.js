import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import scui from './scui'
import i18n from './locales'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import JsonEditorVue from 'json-editor-vue3'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(scui);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component("JsonEditorVue",JsonEditorVue)

//挂载app
app.mount('#app');
