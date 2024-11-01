



/* -------------------------------  MENU  ------------------------------- */


// OPEN/CLOSE THE MENU

function openMenu() {
    toggleClass(menuButton, 'hidden');
    GameButton.buttonsArray.forEach((button) => button.lockGameButton());
}
  
function closeMenu() {
    toggleClass(menuButton, 'hidden');
    GameButton.buttonsArray.forEach((button) => button.unlockGameButton());
}

// TURN BACKGROUND MUSIC ON/OFF

// Event listener for the spacebar to toggle background music
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        toggleMusic();
    }
})

stopMusic(); 

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






/* -------------------------------  PYTHON HEAD ------------------------------- */


// TOGGLE CSS CLASSES

// This function toggles the provided class of the provided element

function toggleClass(element, className) {
    element.classList.toggle(className);
}

// Python head Click Event Listener
pythonHead.addEventListener("click", () => {
    // startMusic();
    toggleClass(pythonHead, 'non-clickable');
    GameButton.buttonsArray.forEach((button) => button.lockGameButton());
    toggleClass(arrowSign, 'hidden');
    clickPythonHead();
});


function clickPythonHead (){
    if (pythonArray.length === 0) {
        toggleClass(instructions1, 'hidden');
        setTimeout(() => {
            toggleClass(instructions1, 'hidden');
        }, 2000);
    }
    
    // 1.
    clearAnswerLine();
    
    // 2.
    resetArray(answersArray);
    
    // 3.
    addRandomButton();
    
    // 4.
    addQuestionMarks();
    
    // 5.
    displayAnswersArray();
    
    // 6.
    displayPythonArray();
    
    // 7.
    resetArray(playerArray);
    
    // 8.
    resetArray(Icon.iconsArray);
}

// (1) This function clears the answer line
function clearAnswerLine() {
    answerLine.innerHTML = "";
}

// (2, 7, 8) This function resets the provided array
function resetArray(array) {
    array.splice(0);
}

/* (3) This function adds a random button icon into the Python Array */

function addRandomButton() {
    const randomButton = generateRandomNumber(); // 3.1.
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

// (3.1) This function generates a random number between 1 and 4 to represent each of the 4 game buttons

function generateRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 4);
    return randomNumber;
}

// (4) This function generates a question mark icon Element for each element in the pythonArray and pushes them into the answersArray 

function addQuestionMarks () {
    pythonArray.forEach(() => {
        const questionMark = document.createElement("img");
        questionMark.setAttribute("class", "game-button-icon");
        questionMark.setAttribute("src", "./images/question-mark.png");
        questionMark.setAttribute("alt", "question mark");
        answersArray.push(questionMark);
      });
} 

// (5) This appends each element of the answers array into the answers Line to display them on screen

function displayAnswersArray() {
    answersArray.forEach((element) => answerLine.appendChild(element));
}

// (6) This function highlights each button Element in the python array with a time interval of 0.5s
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





/* ------------------------------- GAME BUTTONS ------------------------------- */



// This function checks wether the player's choice was correct or not

function checkCoincidence() {
  const lastChoice = playerArray[playerArray.length - 1];
  const currentQuestionMark = pythonArray[playerArray.length - 1];

  if (lastChoice.id === currentQuestionMark.id) {
    const verificationDivArray = answerLine.querySelectorAll("div");
    const lastElement = verificationDivArray[verificationDivArray.length - 1];
    // the 'correct' class is added for the line check
    lastElement.classList.add("correct");

    // The first time that the player answers correctly the 'great' speech bubble is shown
    if (pythonArray.length === 1) {
        toggleClass(great,'hidden');
        setTimeout(() => {
          toggleClass(great,'hidden');
      }, 2000);
    }
  } else {
    fail();
  }
}

// This function shows the provided prompt window and plays the provided sound

function showPrompt(prompt, musicUrl) {
    toggleClass(prompt, 'hidden');
    playSoundEffect(musicUrl);
}
  
// This function activates the verification animation when all answers in the line are correct
function checkLine() {
    const verificationDivArray = answerLine.querySelectorAll("div");
    const lastElement = verificationDivArray[verificationDivArray.length - 1];
  
    if (lastElement.classList.value === "game-button-icon correct") {
      GameButton.buttonsArray.forEach((button) => button.lockGameButton());
      const answerElementsArray = document.querySelectorAll(".game-button-icon");
      setTimeout(() => {
        answerElementsArray.forEach((element) => toggleClass(element, 'verify'));
        playSoundEffect("./sounds/correct.mp3");
      }, 500);
      setTimeout(() => {
        answerElementsArray.forEach((element) => toggleClass(element, "verify"));
      }, 2000);

        /* This functionshows the 'you win' pop-up when the player answers the final array element correctly */
      setTimeout(() => {
        if (pythonArray.length < rounds) {
            clickPythonHead();
        } else if (playerArray[rounds - 1].id === pythonArray[rounds - 1].id) {
            showPrompt(victoryPrompt, "./sounds/victory.mp3");
            GameButton.buttonsArray.forEach((button) => button.lockGameButton());
        }
      }, 2500);
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
    showPrompt(gameOverPrompt, "./sounds/game-over.mp3");
  }
}

function repeatSequence() {
  clearAnswerLine();

  resetArray(answersArray);

  addQuestionMarks();

  displayAnswersArray();

  displayPythonArray();

  resetArray(playerArray);
}







