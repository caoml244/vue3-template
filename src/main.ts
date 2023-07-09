import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
//load
import { loadSvg } from '@/icons'
import { loadPlugins } from '@/plugins'
import { loadDirectives } from '@/directives'
// css
import 'normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.less'
import App from './App.vue'

const app = createApp(App)
/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)
app.use(store)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
