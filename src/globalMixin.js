export default {

    data () {
        return {
            globalMixin: 'This is from global Mixin'
        };
    },
    created: function () {
        const myOption = this.$options.myOption;
        if (myOption) {
            console.log(myOption);
        }
    }
};
