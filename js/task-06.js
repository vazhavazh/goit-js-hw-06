// Напиши скрипт, который при потере фокуса на инпуте
// (событие blur), проверяет его содержимое на правильное
// количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его 
// атрибуте data - length.
// // Если введено подходящее количество символов, то border 
// инпута становится зелёным, если неправильное - красным.
// // Для добавления стилей, используй CSS - классы 
// valid и invalid, которые мы уже добавили в исходные файлы задания.

    const onValidationInput = document.querySelector('[data-length="6"]')


const etalonValueInString = onValidationInput.dataset.length
const etalonValue = Number(etalonValueInString)

onValidationInput.addEventListener('blur', (e) => {

    const inputValueLengthString = e.currentTarget.value.length
    const inputValueLength = Number(inputValueLengthString)
 
    if (inputValueLength !== etalonValue) {
        onValidationInput.classList.remove('valid')
        onValidationInput.classList.add('invalid')
    } else {
        onValidationInput.classList.remove('invalid')
        onValidationInput.classList.add('valid')
    }

})

