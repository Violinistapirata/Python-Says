const answerLine = document.querySelector("#answer-line");
const gameButtonsDiv = document.querySelector("#game-buttons-div");

const playerArray = [];

// Array for the question mark icons and the game button icons
const answersArray = [];

// This function appends to the answerLine all the icon elements in the answersArray
function displayAnswersArray() {
  answersArray.forEach((element) => answerLine.appendChild(element));
}

function checkCoincidence() {
    const lastChoice = playerArray[playerArray.length -1];
    const currentQuestionMark = pythonArray[playerArray.length -1]

    if (lastChoice.id === currentQuestionMark.id){
        console.log('✅');
    } else {
        console.log('❌');
        
    }
}

class GameButton {
  constructor(id, imageUrl, alt, highlightColor) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.alt = alt;
    this.highlightColor = highlightColor;
    this.generateButtonElement();
  }

  generateButtonElement() {
    this.buttonElement = document.createElement("button");
    this.buttonElement.setAttribute("id", this.id);
    this.buttonElement.setAttribute("class", "game-button");
    gameButtonsDiv.appendChild(this.buttonElement);

    // The image in the button
    this.image = document.createElement("img");
    this.image.setAttribute("src", this.imageUrl);
    this.image.setAttribute("alt", this.alt);

    this.buttonElement.appendChild(this.image);

    this.buttonElement.addEventListener("click", () => {
      this.highlight(this.highlightColor);

      // The icon shown in the answers line
      /* this.icon = document.createElement("img");
      this.icon.setAttribute("class", "game-button-icon");
      this.icon.setAttribute("src", this.imageUrl);
      this.icon.setAttribute("alt", this.alt); */
      this.icon = new Icon (this.id, this.imageUrl, this.alt);

      playerArray.push(this.icon);

      const lastChoiceIndex = playerArray.length - 1;
      console.log(lastChoiceIndex);
      answersArray.splice(lastChoiceIndex, 1, this.icon.iconElement);
      console.log("PLAYER ARRAY", playerArray);
      console.log("ANSWERS ARRAY", answersArray);

      clearAnswerLine();
      displayAnswersArray();
      checkCoincidence();
    });
  }

  highlight(color) {
    // highlight button

    this.buttonElement.style.backgroundColor = color;
    setTimeout(() => {
      this.buttonElement.style.backgroundColor = "";
    }, 500);
  }
}

/* const buttonsArray = [htmlButton, cssButton, nodeButton, jsButton ]*/
const htmlButton = new GameButton(
  "html-button",
  "./images/HTML-logo.png",
  "html icon",
  "rgba(255, 0, 0, 0.5)"
);
const cssButton = new GameButton(
  "css-button",
  "./images/CSS-logo.png",
  "css icon",
  "rgba(0, 0, 255, 0.5)"
);
const nodeButton = new GameButton(
  "node-button",
  "./images/NODE-logo.png",
  "node icon",
  "rgba(0, 255, 0, 0.5)"
);
const jsButton = new GameButton(
  "js-button",
  "./images/JS-logo.png",
  "js icon",
  "rgba(255, 255, 0, 0.5)"
);


class Icon {
    constructor(id, src, alt) {
        this.id = id;
        this.class = 'game-button-icon';
        this.src = src;
        this.alt = alt;
        this.generateIconElement()
    }

    generateIconElement() {
        this.iconElement = document.createElement("img");
        this.iconElement.setAttribute("id", this.id);
        this.iconElement.setAttribute("class", "game-button-icon");
        this.iconElement.setAttribute("src", this.src);
        this.iconElement.setAttribute("alt", this.alt);
    }
}
/* 
htmlButton.buttonElement.addEventListener('click', () => {
    // show icon in answers array
    const html = document.createElement('img');
    html.setAttribute('class', 'game-button-icon');
    html.setAttribute('src', '../images/HTML logo.png');
    html.setAttribute('alt', 'html icon');
    answersArray.splice(0, 1, html);
    answerLine.appendChild(answersArray[0]);

    // highlight button
    htmlButton.buttonElement.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
    setTimeout(() => {
        htmlButton.buttonElement.style.backgroundColor = '';
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
 */
