// HTML Elements

// const gameArea = document.querySelector('#game-area');
const navBar = document.querySelector('#nav-bar');
const lives = document.querySelector('#lives');
const menuIcon = document.querySelector('#menu-icon');

// Screen class

class Screen {
    constructor() {
        this.id = 'game-screen';
        this.class = 'screen';
        this.elements = ['nav-bar', 'game-area', 'python-head', 'game-buttons-div', 'answers-array', 'lives', 'menu-button', 'avatars-div', 'python', 'player'];
    }

    generateGameScreenElement() {
        const gameScreen = document.createElement('section');
        document.body.appendChild(gameScreen);
        gameScreen.setAttribute('id', 'game-screen');
        const pythonHead = new PythonHead();
        const gameButtonsDiv = new GameButtonsDiv();
        const answerLine = new AnswerLine();
        const avatarsDiv = new AvatarsDiv();
    }

    /* addNewScreen(type) {
        switch (type) {
            case 'game-screen':
                const gameScreen = document.createElement('section');
                break;

            default:
                break;
        }
    } */
}

const gameScreen = new Screen();
