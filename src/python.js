// Python Array
const pythonArray = [];

// This generates a random number between 1 and 4 to represent each of the 4 game buttons

function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * 4);
  return randomNumber;
}

/* This function adds a random number (that represents one of the four game buttons)
to the Python Array */

function addRandomButton() {
  const randomButton = generateRandomNumber();
  switch (randomButton) {
    case 1:
      /* htmlButton.icon = document.createElement("img");
      htmlButton.icon.setAttribute("class", "game-button-icon");
      htmlButton.icon.setAttribute("src", htmlButton.imageUrl);
      htmlButton.icon.setAttribute("alt", htmlButton.alt); */
      htmlButton.icon = new Icon (htmlButton.id, htmlButton.imageUrl, htmlButton.alt);
      pythonArray.push(htmlButton.icon);
      break;
    case 2:
       /* cssButton.icon = document.createElement("img");
     cssButton.icon.setAttribute("class", "game-button-icon");
     cssButton.icon.setAttribute("src",cssButton.imageUrl);
     cssButton.icon.setAttribute("alt",cssButton.alt); */
     cssButton.icon = new Icon (cssButton.id, cssButton.imageUrl, cssButton.alt);
      pythonArray.push(cssButton.icon);
      break;
    case 3:
        /* nodeButton.icon = document.createElement("img");
      nodeButton.icon.setAttribute("class", "game-button-icon");
      nodeButton.icon.setAttribute("src", nodeButton.imageUrl);
      nodeButton.icon.setAttribute("alt", nodeButton.alt); */
      nodeButton.icon = new Icon (nodeButton.id, nodeButton.imageUrl, nodeButton.alt);
      pythonArray.push(nodeButton.icon);
      break;
    case 4:
        /* jsButton.icon = document.createElement("img");
      jsButton.icon.setAttribute("class", "game-button-icon");
      jsButton.icon.setAttribute("src", jsButton.imageUrl);
      jsButton.icon.setAttribute("alt", jsButton.alt); */
      jsButton.icon = new Icon (jsButton.id, jsButton.imageUrl, jsButton.alt);
      pythonArray.push(jsButton.icon);
      break;
    default:
      break;
  }
  console.log("PYTHON ARRAY", pythonArray);
}

/* This function resets the answers array */
function resetAnswersArray() {
  answersArray.splice(0);
  console.log("ANSWERS ARRAY AFTER RESET", answersArray);
}

/* This function resets the player's array */
function resetPlayerArray() {
  playerArray.splice(0);
  console.log("PLAYER ARRAY AFTER RESET", playerArray);
  Icon.iconsArray.splice(0);
  console.log("ICONS ARRAY AFTER RESET", Icon.iconsArray);
  
}

/* This function clears the answer line */
function clearAnswerLine() {
  answerLine.innerHTML = "";
}

// Variable with the Python Head Element
const pythonHead = document.querySelector("#python-head");

// Python head Click Event Listener

pythonHead.addEventListener("click", () => {
  clearAnswerLine();
  resetAnswersArray();

  addRandomButton();

  /* Shows a question mark icon in the answers line for each element
    in the python array */
  pythonArray.forEach(() => {
    const questionMark = document.createElement("img");
    questionMark.setAttribute("class", "game-button-icon");
    questionMark.setAttribute("src", "./images/question-mark.png");
    questionMark.setAttribute("alt", "question mark");
    answersArray.push(questionMark);
  });

  console.log("ANSWERS ARRAY", answersArray);

  displayAnswersArray();
  displayPythonArray();
  resetPlayerArray();
  if (pythonArray.length >= 10) pythonArray.splice(0);
});

// This function executes the highlight function in every element of the pythonArray
function displayPythonArray() {
  let counter = 0;
  const intervalId = setInterval(() => {
    switch (pythonArray[counter].id) {
      case htmlButton.id:
        htmlButton.highlight(htmlButton.highlightColor);
        break;
      case cssButton.id:
        cssButton.highlight(cssButton.highlightColor);
        break;
      case nodeButton.id:
        nodeButton.highlight(nodeButton.highlightColor);
        break;
      case jsButton.id:
        jsButton.highlight(jsButton.highlightColor);
        break;
      default:
        break;
    }
    counter++;
    if (counter == pythonArray.length) {
        clearInterval(intervalId);
        GameButton.buttonsArray.forEach(button => button.unlockGameButton());
    }
  }, 1000);
}

/* setInterval(()=>{
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    
    switch (randomNumber) {
        case 1:
            htmlButton.highlight(htmlButton.highlightColor);
            break;
        case 2:
            cssButton.highlight(cssButton.highlightColor);
            break;
        case 3:
            nodeButton.highlight(nodeButton.highlightColor);
            break;
        case 4:
            jsButton.highlight(jsButton.highlightColor);
            break;
        default:
            break;
    }
}, 1000); */
