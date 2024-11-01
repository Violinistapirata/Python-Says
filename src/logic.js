

// TURN BACKGROUND MUSIC ON/OFF

function startMusic() {
    backgroundMusic.play(); // Starts the music
}

function stopMusic() {
    backgroundMusic.pause(); // Stops the music
    backgroundMusic.currentTime = 0; // Restarts the music to the beginning
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    startMusic();
  } else {
    stopMusic();
  }
}

muteButton.addEventListener("click", toggleMusic);

stopMusic();

// This function appends to the answerLine all the icon elements in the answersArray
function displayAnswersArray() {
  answersArray.forEach((element) => answerLine.appendChild(element));
}

function checkCoincidence() {
  const lastChoice = playerArray[playerArray.length - 1];
  const currentQuestionMark = pythonArray[playerArray.length - 1];

  if (lastChoice.id === currentQuestionMark.id) {
    const verificationDivArray = answerLine.querySelectorAll("div");
    const lastElement = verificationDivArray[verificationDivArray.length - 1];
    console.log(lastElement);
    lastElement.classList.add("correct");
    console.log("✅");
    if (pythonArray.length === 1) {
      great.classList.replace("hidden", "visible");
      setTimeout(() => {
        great.classList.replace("visible", "hidden");
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
  Icon.iconsArray[Icon.iconsArray.length - 1].setAttribute(
    "class",
    "lastAnswer"
  );
  const lastAnswer = document.querySelector(".lastAnswer");
  lastAnswer.prepend(cross);
  playSoundEffect("./sounds/wrong.mp3");
  GameButton.buttonsArray.forEach((button) => button.lockGameButton());
  wrong.classList.replace("hidden", "visible");
  setTimeout(() => {
    wrong.classList.replace("visible", "hidden");
  }, 2000);
  rage();
  setTimeout(bite, 1500);
  setTimeout(calm, 2000);
  setTimeout(checkLives, 3000);
}

function checkLives() {
  const currentHearts = document.querySelectorAll('[alt="heart"]');
  console.log("CURRENT HEARTS =", currentHearts.length);
  console.log("AM I DEAD?", currentHearts.length === 0);
  if (currentHearts.length > 0) {
    if (pythonArray.length === 1) {
      instructions2.classList.replace("hidden", "visible");
      setTimeout(() => {
        instructions2.classList.replace("visible", "hidden");
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
  console.log("GAME OVER");
  gameOverPrompt.classList.replace("hidden", "visible");
  playSoundEffect("./sounds/game-over.mp3");
  // confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { y: 0.6 }
  //   });
}

function showYouWin() {
  victoryPrompt.classList.replace("hidden", "visible");
  playSoundEffect("./sounds/victory.mp3");
  console.log("YOU WIN");
}

function rage() {
  document.getElementById("python-eye").classList.replace("calm", "rage");
  playSoundEffect("./sounds/rage&bite.mp3");
}

function calm() {
  document.getElementById("python-eye").classList.replace("rage", "calm");
}

function bite() {
  const bite = document.querySelector("#bite");
  bite.setAttribute("style", "display: block");
  setTimeout(() => bite.setAttribute("style", "display: none"), 500);
  const heart = document.querySelectorAll('[alt="heart"]');
  heart[0].remove();
  const pythonAvatar = document.querySelector("#python");
  pythonAvatar.classList.replace("stare", "attack");
  setTimeout(() => pythonAvatar.classList.replace("attack", "stare"), 500);
}

function checkLine() {
  const verificationDivArray = answerLine.querySelectorAll("div");
  const lastElement = verificationDivArray[verificationDivArray.length - 1];

  if (lastElement.classList.value === "correct") {
    const answerElementsArray = document.querySelectorAll(".game-button-icon");
    // const verificationDivElement = document.querySelector("#verification");
    // verificationDivElement.classList.add("verify");
    setTimeout(() => {
      answerElementsArray.forEach((element) => element.classList.add("verify"));
      playSoundEffect("./sounds/correct.mp3");
    }, 500);
    setTimeout(() => {
      answerElementsArray.forEach((element) => element.classList.remove("verify"));
    }, 2000);
    setTimeout(() => {
      pythonHead.classList.replace("non-clickable", "clickable");
      if (pythonArray.length < 10) {
        clickPythonHead();
      }
    }, 2500);
  }
}

function openMenu() {
  menuButton.classList.replace("hidden", "visible");
  GameButton.buttonsArray.forEach((button) => button.lockGameButton());
  // pythonHead.classList.replace("clickable", "non-clickable");
}

function closeMenu() {
  menuButton.classList.replace("visible", "hidden");
  GameButton.buttonsArray.forEach((button) => button.unlockGameButton());
  // pythonHead.classList.replace("non-clickable", "clickable");
}




