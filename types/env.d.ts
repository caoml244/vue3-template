declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}

declare module '*.less' {
  const less: Record<string, string>
  export default less
}
