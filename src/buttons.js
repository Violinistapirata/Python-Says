const answersArray = [null];
const answerLine = document.querySelector('#answer-line');
const htmlButton = document.querySelector('#html-button');
htmlButton.addEventListener('click', () => {
    const html = document.createElement('img');
    html.setAttribute('class', 'game-button-icon')
    html.setAttribute('src', '../images/HTML logo.png')
    html.setAttribute('alt', 'html icon')
    answersArray.splice(0, 1, html);
    answerLine.appendChild(answersArray[0])
})

const cssButton = document.querySelector('#css-button');
cssButton.addEventListener('click', () => {
    const css = document.createElement('img');
    css.setAttribute('class', 'game-button-icon')
    css.setAttribute('src', '../images/CSS logo.png')
    css.setAttribute('alt', 'css icon')
    answersArray.splice(0, 1, css);
    answerLine.appendChild(answersArray[0])
})

const nodeButton = document.querySelector('#node-button');
nodeButton.addEventListener('click', () => {
    const node = document.createElement('img');
    node.setAttribute('class', 'game-button-icon')
    node.setAttribute('src', '../images/NODE logo.png')
    node.setAttribute('alt', 'node icon')
    answersArray.splice(0, 1, node);
    answerLine.appendChild(answersArray[0])
})

const jsButton = document.querySelector('#js-button');
jsButton.addEventListener('click', () => {
    const js = document.createElement('img');
    js.setAttribute('class', 'game-button-icon')
    js.setAttribute('src', '../images/JS logo.png')
    js.setAttribute('alt', 'js icon')
    answersArray.splice(0, 1, js);
    answerLine.appendChild(answersArray[0])
})


const pythonHead = document.querySelector('#python-head');
pythonHead.addEventListener('click', () => {
    const questionMark = document.createElement('img');
    questionMark.setAttribute('class', 'game-button-icon')
    questionMark.setAttribute('src', '../images/question-mark.png')
    questionMark.setAttribute('alt', 'question mark')
    answersArray.splice(0, 1, questionMark);
    answerLine.appendChild(answersArray[0])
})