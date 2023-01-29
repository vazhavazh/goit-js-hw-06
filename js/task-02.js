const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.


const elements = ingredients.map((el) => {
  const newLi = document.createElement('li')
  newLi.classList.add('item')
  newLi.textContent = el
  return newLi
})

const ulEl = document.getElementById('ingredients')
ulEl.append(...elements)
