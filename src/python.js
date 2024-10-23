
const pythonArray = [];

function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * 4);
  return randomNumber;
}
let randomNumber = 0;
function addRandomButton() {
    const randomButton = generateRandomNumber();
    pythonArray.push(randomButton);
    console.log(pythonArray)
}

function resetPlayerArray(){playerArray.splice(0)}
const pythonHead = document.querySelector("#python-head");
pythonHead.addEventListener("click", () => {
  // show icon in answers array
  const questionMark = document.createElement("img");
  questionMark.setAttribute("class", "game-button-icon");
  questionMark.setAttribute("src", "../images/question-mark.png");
  questionMark.setAttribute("alt", "question mark");
  answersArray.splice(0, 1, questionMark);
  answerLine.appendChild(answersArray[0]);
  
  addRandomButton();
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

generateRandomNumber();

console.log(generateRandomNumber());
