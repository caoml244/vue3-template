import { type App } from 'vue'
import { loadElementPlus } from './element-plus'
export const loadPlugins = (app: App) => {
  loadElementPlus(app)
}
