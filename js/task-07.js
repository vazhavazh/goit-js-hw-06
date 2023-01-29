// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.
const textEl = document.querySelector('#text')
const scrollBar = document.querySelector('#font-size-control')
scrollBar.addEventListener('input', (e) => {
    const desireValue = e.target.value
    textEl.style.fontSize = desireValue + 'px'
    
})