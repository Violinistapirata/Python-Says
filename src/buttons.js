const answersArray = [null];
const answerLine = document.querySelector('#answer-line');
const htmlButton = document.querySelector('#html-button');
htmlButton.addEventListener('click', () => {
    // show icon in answers array
    const html = document.createElement('img');
    html.setAttribute('class', 'game-button-icon');
    html.setAttribute('src', '../images/HTML logo.png');
    html.setAttribute('alt', 'html icon');
    answersArray.splice(0, 1, html);
    answerLine.appendChild(answersArray[0]);

    // highlight button
    htmlButton.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
    setTimeout(() => {
        htmlButton.style.backgroundColor = '';
    }, 500);
})

const cssButton = document.querySelector('#css-button');
cssButton.addEventListener('click', () => {
    // show icon in answers array
    const css = document.createElement('img');
    css.setAttribute('class', 'game-button-icon');
    css.setAttribute('src', '../images/CSS logo.png');
    css.setAttribute('alt', 'css icon');
    answersArray.splice(0, 1, css);
    answerLine.appendChild(answersArray[0]);

    // highlight button
    cssButton.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    setTimeout(() => {
        cssButton.style.backgroundColor = '';
    }, 500);
})

const nodeButton = document.querySelector('#node-button');
nodeButton.addEventListener('click', () => {
    // show icon in answers array
    const node = document.createElement('img');
    node.setAttribute('class', 'game-button-icon');
    node.setAttribute('src', '../images/NODE logo.png');
    node.setAttribute('alt', 'node icon');
    answersArray.splice(0, 1, node);
    answerLine.appendChild(answersArray[0]);
    
    // highlight button
    nodeButton.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    setTimeout(() => {
        nodeButton.style.backgroundColor = '';
    }, 500);
})


const jsButton = document.querySelector('#js-button');
jsButton.addEventListener('click', () => {
    // show icon in answers array
    const js = document.createElement('img');
    js.setAttribute('class', 'game-button-icon');
    js.setAttribute('src', '../images/JS logo.png');
    js.setAttribute('alt', 'js icon');
    answersArray.splice(0, 1, js);
    answerLine.appendChild(answersArray[0]);

    // highlight button
    jsButton.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
    setTimeout(() => {
        jsButton.style.backgroundColor = '';
    }, 500);
})


const pythonHead = document.querySelector('#python-head');
pythonHead.addEventListener('click', () => {
    // show icon in answers array
    const questionMark = document.createElement('img');
    questionMark.setAttribute('class', 'game-button-icon');
    questionMark.setAttribute('src', '../images/question-mark.png');
    questionMark.setAttribute('alt', 'question mark');
    answersArray.splice(0, 1, questionMark);
    answerLine.appendChild(answersArray[0]);

    // highlight button
    
})