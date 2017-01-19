// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// var App = require('./App');
/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     components: { App }
// })

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

import Login from './Login'
import Home from './Home'
import Random from './Random'
import CustomPeer from './CustomPeer'
import CustomFlavor from './CustomFlavor'
import CustomHealth from './CustomHealth'
import CustomTime from './CustomTime'
import CustomResult from './CustomResult'
import Invite from './Invite'
import Heat from './Heat'

// // 2. Define route components
// const Home = { template: '<div>home</div>' }
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/', component: Login },
            { path: '/login', component: Login },
            { path: '/home', component: Home },
            { path: '/home/random', component: Random },
            { path: '/home/heat', component: Heat },
            { path: '/home/custom-peer', component: CustomPeer },
            { path: '/home/custom-peer/custom-flavor', component: CustomFlavor },
            { path: '/home/custom-peer/custom-health', component: CustomHealth },
            { path: '/home/custom-peer/custom-health/custom-time', component: CustomTime },
            { path: '/home/custom-peer/custom-health/custom-time/custom-result', component: CustomResult },
            { path: '/home/invite', component: Invite },

        ]
    })
    // 4. Create and mount root instance.
    // Make sure to inject the router.
    // Route components will be rendered inside <router-view>.
new Vue({
    router,
    template: `
    <div id="app" >
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#myapp')