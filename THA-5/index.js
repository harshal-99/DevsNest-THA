const buttons = document.querySelectorAll('button')
const input1 = document.getElementById('firstNumber')
const input2 = document.getElementById('secondNumber')
const displayResult = document.getElementsByClassName('displayResult')
let result = 0

for (let button of buttons) {
    button.addEventListener('click', () => {
        switch (button.innerText) {
            case 'Add':
                result = parseFloat(input1.value) + parseFloat(input2.value)
                break
            case 'Subtract':
                result = parseFloat(input1.value) - parseFloat(input2.value)
                break
            case 'Multiply':
                result = parseFloat(input1.value) * parseFloat(input2.value)
                break
            case 'Divide':
                result = parseFloat(input1.value) / parseFloat(input2.value)
                break
        }
        displayResult[0].innerText = `After ${button.innerText}ing result is ${result}`
    })
}