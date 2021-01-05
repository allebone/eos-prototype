import './main.styl'
import Vuesax from '../../node_modules/vuesax'
import '../../node_modules/vuesax/dist/vuesax.css';
import Vuecode from '../../node_modules/vuecode.js/dist/vuecode.common.js'
import '../../node_modules/vuecode.js/dist/vuecode.css'
import demo from './theme/demo.vue'
import Box from './theme/box.vue'
import Vue from '../../node_modules/vue'

// custom components
import VxCard from './theme/themeComponents/VxCard.vue'
import FeatherIcon from './theme/themeComponents/FeatherIcon.vue'
import VxList from './theme/themeComponents/VxList.vue'
import VxAutoSuggest from './theme/themeComponents/VxAutoSuggest.vue'
import ChangeTimeDurationDropdown from './theme/themeComponents/ChangeTimeDurationDropdown.vue'
import VxInputGroup from './theme/themeComponents/VxInputGroup.vue'


// fixed components
import VxTooltip from './theme/themeComponents/vx-tooltip/VxTooltip.vue'

// Required(Sub) Components for main component
// import Prism from '../../node_modules/vue-prism-component'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuesax)
  Vue.use(Vuecode,{
    theme:'shadow'
  })
  Vue.component('Demo',demo)
  Vue.component('Box',Box)
  Vue.component('vx-tooltip',VxTooltip)
  Vue.component('vx-card',VxCard)
  Vue.component('feather-icon', FeatherIcon)
  Vue.component('vx-list', VxList)
  Vue.component('vx-auto-suggest', VxAutoSuggest)
  Vue.component('change-time-duration-dropdown', ChangeTimeDurationDropdown)
  Vue.component('vx-input-group', VxInputGroup)
  // Vue.component('prism',Prism)
}

let colors = {
	primary: '#7367F0',
	success: '#28C76F',
	danger: '#EA5455',
	warning: '#FF9F43',
	dark: '#1E1E1E',
}

Vue.use(Vuesax, { theme:{ colors } });
