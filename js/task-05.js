// // Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение в
//  span#name - output.Если инпут пустой, в спане должна отображаться
//  строка "Anonymous".
const spanEl = document.querySelector('#name-output')

const inputEl = document.querySelector('#name-input')



inputEl.addEventListener('input', (e) => {
    if (e.target.value !== "") {
        const newText = e.target.value
        spanEl.textContent = newText
    } else {
        spanEl.textContent = 'Anonymous'
    }

})