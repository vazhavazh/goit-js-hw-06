
// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChangeColour = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const spanEl = document.querySelector('.color')

buttonChangeColour.addEventListener('click', (e) => {
  
  const randomColourValue = getRandomHexColor()
  
  bodyEl.style.backgroundColor = randomColourValue
  spanEl.innerText = randomColourValue
  
})