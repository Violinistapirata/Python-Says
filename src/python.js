const python = {};

const pythonArray = [1, 2, 3, 4];

function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * 4);
  return randomNumber;
}
let randomNumber = 0;
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

displayPythonArray();

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
