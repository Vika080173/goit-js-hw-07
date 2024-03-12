const categoriesEl = document.querySelectorAll(".item");
console.log(`Namber of categories: ${categoriesEl.length}`);

categoriesEl.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});

