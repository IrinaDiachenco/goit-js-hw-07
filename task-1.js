const itemEl = document.querySelectorAll("li.item");
console.log(`В списке ${itemEl.length} категории.`);
itemEl.forEach((element) =>
  console.log(`Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.lastElementChild.children.length}`)
);
