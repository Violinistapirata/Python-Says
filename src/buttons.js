const gameButtonsDiv = document.querySelector("#game-buttons-div");

class Icon {
  static iconsArray = [];
  constructor(id, src, alt) {
    this.id = id;
    this.class = "game-button-icon";
    this.src = src;
    this.alt = alt;
    this.generateIconElement();
  }

  generateIconElement() {
    this.iconDivElement = document.createElement("div");
    this.iconElement = document.createElement("img");
    this.iconElement.setAttribute("id", this.id);
    this.iconElement.setAttribute("class", "game-button-icon");
    this.iconElement.setAttribute("src", this.src);
    this.iconElement.setAttribute("alt", this.alt);
    this.iconDivElement.appendChild(this.iconElement);
    Icon.iconsArray.push(this.iconDivElement);
    console.log("ICONS ARRAY", Icon.iconsArray);
  }
}

class GameButton {
  static buttonsArray = [];
  constructor(id, imageUrl, soundUrl, alt, highlightColor) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.soundUrl = soundUrl;
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
      this.icon = new Icon(this.id, this.imageUrl, this.alt);

      playerArray.push(this.icon);

      const lastChoiceIndex = playerArray.length - 1;
      console.log(lastChoiceIndex);
      answersArray.splice(lastChoiceIndex, 1, this.icon.iconDivElement);
      console.log("PLAYER ARRAY", playerArray);
      console.log("ANSWERS ARRAY", answersArray);

      clearAnswerLine();
      displayAnswersArray();
      checkCoincidence();
      if (playerArray.length === pythonArray.length) {
        GameButton.buttonsArray.forEach((button) => button.lockGameButton());
        checkLine();
      }
    });

    GameButton.buttonsArray.push(this);
  }

  highlight(color) {
    // highlight button

    this.buttonElement.style.backgroundColor = color;
    setTimeout(() => {
      this.buttonElement.style.backgroundColor = "";
    }, 500);

    playSoundEffect(this.soundUrl);
  }

  // THIS MAY NOT BE NECESSARY
  lockGameButton() {
    this.buttonElement.style.pointerEvents = "none";
  }

  unlockGameButton() {
    this.buttonElement.style.pointerEvents = "auto";
  }
}


// GAME BUTTONS INITIALISATION

const htmlButton = new GameButton(
  "html-button",
  "./images/HTML-logo.png",
  "./sounds/tone1.mp3",
  "html icon",
  "rgba(255, 0, 0, 0.5)"
);
const cssButton = new GameButton(
  "css-button",
  "./images/CSS-logo.png",
  "./sounds/tone2.mp3",
  "css icon",
  "rgba(0, 0, 255, 0.5)"
);
const nodeButton = new GameButton(
  "node-button",
  "./images/NODE-logo.png",
  "./sounds/tone3.mp3",
  "node icon",
  "rgba(0, 255, 0, 0.5)"
);
const jsButton = new GameButton(
  "js-button",
  "./images/JS-logo.png",
  "./sounds/tone4.mp3",
  "js icon",
  "rgba(255, 255, 0, 0.5)"
);
console.log("BUTTONS ARRAY", GameButton.buttonsArray);

// GameButton.buttonsArray.push(htmlButton, cssButton, nodeButton, jsButton);
