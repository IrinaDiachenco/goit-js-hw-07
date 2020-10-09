const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const spanEl = document.querySelector("#value");
console.log(`Значение счетчика: ${counterValue}`);

decrementBtn.addEventListener("click", (counterValue) => {
    --spanEl.textContent
});

incrementBtn.addEventListener("click", (counterValue) => {
    ++spanEl.textContent
});
