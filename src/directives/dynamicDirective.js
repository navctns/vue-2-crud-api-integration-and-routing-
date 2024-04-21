
const pinTo = {
    bind: function (el, binding, vnode) {
        el.style.position = 'fixed';
        el.style.top = binding.value + 'px';
    }
};
const pinToDir = {
    bind: function (el, binding, vnode) {
        el.style.position = 'fixed';
        const s = (binding.arg === 'left' ? 'left' : 'top');
        el.style[s] = binding.value + 'px';
    }
};
export default {
    pinTo: pinTo,
    pinToDir: pinToDir
};
