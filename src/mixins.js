const myMixin = {
    created: function () {
        this.hello();
    },
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        };
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!');
        }
    }
};

export default myMixin;
