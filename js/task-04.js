// Создай переменную counterValue в которой будет храниться текущее значение счетчика и 
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const refs = {
    onDecreaseCounterBtn: document.querySelector('[data-action="decrement"]'),
    onIncreaseCounterBtn: document.querySelector('[data-action="increment"]'),
    
}
let counterValue = 0;

const span = document.querySelector('div > span')



refs.onDecreaseCounterBtn.addEventListener('click', onDecreaseCounter)
refs.onIncreaseCounterBtn.addEventListener('click', onIncreaseCounter)


function onIncreaseCounter() {
    // span.textContent = counterValue++
    span.textContent = counterValue += 1
    
}


function onDecreaseCounter () {
    // span.textContent = counterValue--
    span.textContent = counterValue -= 1
}
