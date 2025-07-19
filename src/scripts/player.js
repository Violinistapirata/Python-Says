
/* class Player {
    static playerArray = []
    constructor() {
        this.lives = 3;
    }

    addChosenElement(choice){
        Player.playerArray.push(choice)
    }

    // displayChoices(){
    // }
} */

// const lives = 3;



// function addChosenButton(choice) {
//     const chosenButton = choice;
//     playerArray.push(chosenButton);
//     console.log(playerArray)
// }

const easterEgg1 = document.createElement('img');
easterEgg1.setAttribute('id', 'solitaire');
easterEgg1.setAttribute('src', '/public/images/solitaire.jpeg');
easterEgg1.setAttribute('alt', 'screen');

const playerAvatar = document.querySelector('#player');
playerAvatar.appendChild(easterEgg1);





// The answer list element in the same position as the player's last choice