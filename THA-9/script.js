import questions from "./questions.js";

class Quiz {
    constructor(container) {
        this.container = container
        this.questions = questions
    }


    start() {
        for (let i = 0; i < this.questions.length; i++) {
            const wrapperDiv = document.createElement('div')
            const questionDiv = document.createElement('div')
            const optionsDiv = document.createElement('div')
            const buttons = this.createButtons()

            this.setButtonText(questions[i], buttons, i)


            questionDiv.classList.add('question')
            questionDiv.setAttribute('id', 'question')
            questionDiv.innerText = questions[i]['name']

            optionsDiv.setAttribute('id', 'options')
            optionsDiv.append(buttons[0], buttons[1], buttons[2], buttons[3])
            optionsDiv.addEventListener('click', (ev) => {
                if (ev && ev.target.nodeName === 'BUTTON') {
                    let btn = ev.target
                    if(btn.buttonIndex === this.questions[btn.questionIndex]['answer']) {
                        btn.classList.toggle('correct')
                    } else {
                        btn.classList.toggle('incorrect')
                    }

                }
            })

            wrapperDiv.append(questionDiv, optionsDiv)
            wrapperDiv.classList.add('wrapper')
            this.container.append(wrapperDiv)
        }
    }

    createButtons() {
        let buttons = []
        for (let i = 0; i < 4; i++) {
            buttons[i] = document.createElement('button')
        }
        return buttons
    }

    setButtonText(question, buttons, questionIndex) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = question[`option${i + 1}`]
            buttons[i].buttonIndex = i
            buttons[i].questionIndex = questionIndex
        }
    }
}


const quiz = new Quiz(
    document.querySelector('.container')
)

quiz.start()