
import Vue from 'vue'
import { VuePlugin } from 'vuera'
import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@icedesign/base/reset.scss';
import '@icedesign/base/dist/ICEDesignBase.css';
import '@icedesign/layout/lib/main.scss';
import '@icedesign/menu/lib/main.scss';
import App from '../ice/scaffolds/ice-design-cms/src/routes'

Vue.use(VuePlugin)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
