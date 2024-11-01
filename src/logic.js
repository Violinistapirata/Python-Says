

// PLAYER ARRAY

const playerArray = [];


// PYTHON ARRAY

const pythonArray = [];


// ARRAY TO BE DISPLAYED ON SCREEN

const answersArray = [];




// TURN BACKGROUND MUSIC ON/OFF



muteButton.addEventListener("click", toggleMusic);

function toggleMusic() {
  if (backgroundMusic.paused) {
    startMusic();
  } else {
    stopMusic();
  }
}

function startMusic() {
  backgroundMusic.play(); // Starts the music
}

function stopMusic() {
  backgroundMusic.pause(); // Stops the music
  backgroundMusic.currentTime = 0; // Restarts the music to the beginning
}



// This function toggles the provided class of the provided element

function toggleClass(element, className) {
    element.classList.toggle(className);
}


// DISPLAY ICONS FROM ANSWERS ARRAY IN ANSWER LINE

function displayAnswersArray() {
  answersArray.forEach((element) => answerLine.appendChild(element));
}

// CHECK IF THE PLAYER'S CHOICE IS CORRECT

function checkCoincidence() {
  const lastChoice = playerArray[playerArray.length - 1];
  const currentQuestionMark = pythonArray[playerArray.length - 1];

  if (lastChoice.id === currentQuestionMark.id) {
    const verificationDivArray = answerLine.querySelectorAll("div");
    const lastElement = verificationDivArray[verificationDivArray.length - 1];
    lastElement.classList.add("correct");
    if (pythonArray.length === 1) {
        toggleClass(great,'hidden');
        setTimeout(() => {
          toggleClass(great,'hidden');
      }, 2000);
    }
    setTimeout(() => {
      /* This clears the python array when it reaches 10 elements */
      if (playerArray[9].id === pythonArray[9].id) {
        // pythonArray.splice(0);
        showYouWin();
        GameButton.buttonsArray.forEach((button) => button.lockGameButton());
      }
    }, 3000);
  } else {
    fail();
  }
}

function fail() {
  console.log("❌");
  const cross = document.createElement("img");
  cross.setAttribute("id", "cross");
  cross.setAttribute("src", "./images/red-cross.png");
  cross.setAttribute("alt", "red cross");
  Icon.iconsArray[Icon.iconsArray.length - 1].classList.add(
    "lastAnswer"
  );
  const lastAnswer = document.querySelector(".lastAnswer");
  lastAnswer.prepend(cross);
  playSoundEffect("./sounds/wrong.mp3");
  GameButton.buttonsArray.forEach((button) => button.lockGameButton());
  toggleClass(wrong,'hidden');
  setTimeout(() => {
    toggleClass(wrong,'hidden');
  }, 1500);
  rage();
  setTimeout(bite, 1500);
//   setTimeout(calm, 2000);
  setTimeout(checkLives, 3000);
}

function rage() {
  const pythonEye = document.querySelector("#python-eye");
  toggleClass(pythonEye, 'rage');
  playSoundEffect("./sounds/rage&bite.mp3");
  setTimeout(() => toggleClass(pythonEye, 'rage'), 2000);
}

function bite() {
  const biteElement = document.querySelector("#bite");
  toggleClass(biteElement,'hidden');
  console.log('after toggle', biteElement);

  setTimeout(() => toggleClass(biteElement,'hidden'), 500);
  const heart = document.querySelectorAll('[alt="heart"]');
  heart[0].remove();
  toggleClass(pythonAvatar,'attack');
  setTimeout(() => toggleClass(pythonAvatar,'attack'), 500);
}

function checkLine() {
  const verificationDivArray = answerLine.querySelectorAll("div");
  const lastElement = verificationDivArray[verificationDivArray.length - 1];

  if (lastElement.classList.value === "game-button-icon correct") {
    const answerElementsArray = document.querySelectorAll(".game-button-icon");
    setTimeout(() => {
      answerElementsArray.forEach((element) => toggleClass(element, 'verify'));
      playSoundEffect("./sounds/correct.mp3");
    }, 500);
    setTimeout(() => {
      answerElementsArray.forEach((element) => toggleClass(element, "verify"));
    }, 2000);
    setTimeout(() => {
        toggleClass(pythonHead, 'non-clickable');
      if (pythonArray.length < 10) {
        clickPythonHead();
      }
    }, 2500);
  }
}

function checkLives() {
  const currentHearts = document.querySelectorAll('[alt="heart"]');
  console.log("CURRENT HEARTS =", currentHearts.length);
  console.log("AM I DEAD?", currentHearts.length === 0);
  if (currentHearts.length > 0) {
    if (pythonArray.length === 1) {
      toggleClass(instructions2, 'hidden');
      setTimeout(() => {
        toggleClass(instructions2, 'hidden');
      }, 1000);
    }
    repeatSequence();
  } else {
    showGameOver();
    // GameButton.buttonsArray.forEach((button) => button.lockGameButton());
  }
}

function repeatSequence() {
  clearAnswerLine();

  resetAnswersArray();

  addQuestionMarks();

  displayAnswersArray();

  displayPythonArray();

  resetPlayerArray();
}

function showGameOver() {
  toggleClass(gameOverPrompt, 'hidden');
  playSoundEffect("./sounds/game-over.mp3");
}

function showYouWin() {
  toggleClass(victoryPrompt, 'hidden');
  playSoundEffect("./sounds/victory.mp3");
}

function openMenu() {
  toggleClass(menuButton, 'hidden');
  GameButton.buttonsArray.forEach((button) => button.lockGameButton());

}

function closeMenu() {
  toggleClass(menuButton, 'hidden');
  GameButton.buttonsArray.forEach((button) => button.unlockGameButton());

}





/* -------------------------------  PYTHON  ------------------------------- */





// This function generates a random number between 1 and 4 to represent each of the 4 game buttons

function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * 4);
  return randomNumber;
}

/* This function adds a random button icon into the Python Array */

function addRandomButton() {
  const randomButton = generateRandomNumber();
  switch (randomButton) {
    case 1:
      htmlButton.icon = new Icon (htmlButton.id, htmlButton.imageUrl, htmlButton.alt);
      pythonArray.push(htmlButton.icon);
      break;

    case 2:
     cssButton.icon = new Icon (cssButton.id, cssButton.imageUrl, cssButton.alt);
      pythonArray.push(cssButton.icon);
      break;

    case 3:
      nodeButton.icon = new Icon (nodeButton.id, nodeButton.imageUrl, nodeButton.alt);
      pythonArray.push(nodeButton.icon);
      break;

    case 4:
      jsButton.icon = new Icon (jsButton.id, jsButton.imageUrl, jsButton.alt);
      pythonArray.push(jsButton.icon);
      break;

    default:
      break;
  }
  console.log("PYTHON ARRAY", pythonArray);
}

// This function resets the provided array

function resetArray(array) {
   array.splice(0);
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

function addQuestionMarks () {
    pythonArray.forEach(() => {
        const questionMark = document.createElement("img");
        questionMark.setAttribute("class", "game-button-icon");
        questionMark.setAttribute("src", "./images/question-mark.png");
        questionMark.setAttribute("alt", "question mark");
        answersArray.push(questionMark);
      });
} 

// Python head Click Event Listener
pythonHead.addEventListener("click", () => {
    startMusic();
    clickPythonHead();
   });

function clickPythonHead (){
    toggleClass(pythonHead, 'non-clickable');
    toggleClass(arrowSign, 'hidden');
    if (pythonArray.length === 0) {
        toggleClass(instructions1, 'hidden');
        setTimeout(() => {
            toggleClass(instructions1, 'hidden');
        }, 2000);
    }


    /* This locks the game buttons during the sequence animation */
    GameButton.buttonsArray.forEach((button) => button.lockGameButton());
    
    /* This clears the answers Line in the DOM*/
    clearAnswerLine();
    
    /* This clears the AnswersArray */
    resetArray(answersArray);
    
    /* This adds a random button Element in the pythonArray */
    addRandomButton();
    
    /* This generates a question mark icon Element for each element
    in the pythonArray and pushes them into the answersArray */
    addQuestionMarks();
    
    /* This appends each element of the answers array into the answers Line to display them on screen */
    displayAnswersArray();
    
    /* This highlights each button Element in the python array with a time interval of 0.5s */
    displayPythonArray();
    
    /* This clears the playerArray */
    resetArray(playerArray);
}

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
        setTimeout(() => {
            GameButton.buttonsArray.forEach(button => button.unlockGameButton());
        }, 1000)
    }
  }, 1000);
}
