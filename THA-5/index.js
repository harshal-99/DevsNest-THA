const buttons = document.querySelectorAll('button')
const input1 = document.getElementById('firstNumber')
const input2 = document.getElementById('secondNumber')
const displayResult = document.getElementsByClassName('displayResult')
let result = 0

for (let button of buttons) {
    button.addEventListener('click', () => {
        let val1 = sanitiseInput(input1.value)
        let val2 = sanitiseInput(input2.value)
        switch (button.innerText) {
            case 'Add':
                result = val1 + val2
                break
            case 'Subtract':
                result = val1 - val2
                break
            case 'Multiply':
                result = val1 * val2
                break
            case 'Divide':
                result = val1 / val2
                break
        }
        displayResult[0].innerText = `After ${button.innerText}ing result is ${result}`
    })
}

function sanitiseInput(input) {
    if (!input) return 0
    return parseFloat(input)
}