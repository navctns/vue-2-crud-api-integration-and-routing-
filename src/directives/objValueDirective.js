
export default function (el, binding) {
    console.log(binding.value.bgColor); // => "white"
    console.log(binding.value.color); // => "hello!"
}
