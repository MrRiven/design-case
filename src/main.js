import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import waterfall from 'vue-waterfall2'
import Viewer from 'v-viewer' // 图片预览
import 'viewerjs/dist/viewer.css' // 图片预览

Vue.use(waterfall)
Vue.use(Viewer)
Viewer.setDefaults({
  defaultOptions: {
    zIndex: 9999
  },
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: 'data-source'
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
