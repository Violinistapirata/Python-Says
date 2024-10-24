

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
  pythonArray.push(randomButton);
  console.log('PYTHON ARRAY', pythonArray);
}

/* This function resets the answers array */
function resetAnswersArray() {
  answersArray.splice(0);
  console.log('ANSWERS ARRAY AFTER RESET', answersArray);
  
}

/* This function resets the player's array */
function resetPlayerArray() {
    playerArray.splice(0);
    console.log('PLAYER ARRAY AFTER RESET', playerArray);
    
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

  console.log('ANSWERS ARRAY', answersArray);    

  displayAnswersArray();
  displayPythonArray();
  resetPlayerArray();
});

// This function executes the highlight function in every element of the pythonArray
function displayPythonArray() {
  let counter = 0;
  const intervalId = setInterval(() => {
    switch (pythonArray[counter]) {
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
    counter++;
    if (counter == pythonArray.length) clearInterval(intervalId);
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
