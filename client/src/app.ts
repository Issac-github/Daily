import { createApp } from 'vue'
import './app.css'
import 'taro-ui-vue3/dist/style/index.scss'

import { createUI } from 'taro-ui-vue3'
import { AtButton, AtInput, AtTabs } from 'taro-ui-vue3/lib'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

const tuv3 = createUI({
  AtButton,
  AtInput,
  AtTabs
})
App.use(tuv3)

export default App
