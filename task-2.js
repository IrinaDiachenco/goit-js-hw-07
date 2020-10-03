const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = ingredients.map((ingredient) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = ingredient;
  return listItemRef;
});
document.querySelector("#ingredients").append(...ingredientsEl);
console.log(ingredientsEl);
