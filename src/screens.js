// HTML Elements

// const gameArea = document.querySelector('#game-area');
const navBar = document.querySelector('#nav-bar');
const lives = document.querySelector('#lives');
const menuIcon = document.querySelector('#menu-icon');

// Screen class

class Screen {
    constructor() {
        this.class = 'screen';
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

const gameScreen = new Screen(100, 50);