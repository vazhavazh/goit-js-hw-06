// 1)
const ulEl = document.getElementById('categories')
const quantityOfCategories = ulEl.children.length;


console.log('Number of categories:', quantityOfCategories)

//  2)
const liCollection = ulEl.children

for (const el of liCollection) {
    console.log('Category:',el.firstElementChild.innerText)
    console.log('Elements:', el.lastElementChild.children.length)
}

