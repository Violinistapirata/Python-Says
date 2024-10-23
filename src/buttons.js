const answerLine = document.querySelector("#answer-line");
// const htmlButton = document.querySelector('#html-button');
const gameButtonsDiv = document.querySelector("#game-buttons-div");
const answersArray = [null];

class GameButton {
  static answersArray = [null];
  constructor(id, imageUrl, alt, highlightColor) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.alt = alt;
    this.highlightColor = highlightColor;
    this.generateButtonElement();
    console.log(this.imageUrl);
    
  }

  generateButtonElement() {
    this.buttonElement = document.createElement("button");
    this.buttonElement.setAttribute("id", this.id);
    this.buttonElement.setAttribute("class", "game-button");
    gameButtonsDiv.appendChild(this.buttonElement);

    const icon = document.createElement("img");
    icon.setAttribute("src", this.imageUrl);
    icon.setAttribute("alt", this.alt);

    this.buttonElement.appendChild(icon);

    this.buttonElement.addEventListener("click", () => {
      this.highlight(this.highlightColor);
      // show icon in answers array
      const icon = document.createElement("img");
      icon.setAttribute("class", "game-button-icon");
      icon.setAttribute("src", this.imageUrl);
      icon.setAttribute("alt", this.alt);
      GameButton.answersArray.splice(0, 1, icon);
      answerLine.appendChild(GameButton.answersArray[0]);
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


