let counterValue = 0;
counterValue = ++document.querySelector("#value").textContent;
console.log(`Значение счетчика: ${counterValue}`);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const handleDecrementBtnClick = () => console.log(counterValue--);
console.log(`Значение счетчика: ${counterValue}`);
decrementBtn.addEventListener("click", handleDecrementBtnClick);

const incrementBtn = document.querySelector('button[data-action="increment"]');
const handleIncrementBtnClick = () => console.log(counterValue++);
console.log(`Значение счетчика: ${counterValue}`);
incrementBtn.addEventListener("click", handleIncrementBtnClick);
