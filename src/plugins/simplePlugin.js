export default {
    install (Vue, options) {
        Vue.mixin({
            created () {
                console.log('hello from simple-plugin');
            }
        });

        Vue.directive('highlight', {
            inserted (el) {
                el.style.color = 'red';
            }
        });
    }
};
