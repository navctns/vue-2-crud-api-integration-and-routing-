import Vue from 'vue';
import App from './App.vue';
import globalMixin from './globalMixin';
// directives
import focusDirective from '@/directives/focusDirective';
import demoDirective from '@/directives/directiveBinding';
import dynamicDirective from '@/directives/dynamicDirective';
import objValueDirective from '@/directives/objValueDirective';

// plugins
import simplePlugin from '@/plugins/simplePlugin';
import router from './router/router';

const app = new Vue({
    router,
    // store,
    render: h => h(App)
});

Vue.mixin(globalMixin);
Vue.use(simplePlugin);

// directives
Vue.directive('focus', focusDirective);
Vue.directive('demo', demoDirective);
Vue.directive('pin', dynamicDirective.pinTo);
Vue.directive('pin-dir', dynamicDirective.pinToDir);
Vue.directive('colors', objValueDirective);

app.$mount('#app');
