
class Player {
    static playerArray = []
    constructor() {
        this.lives = 3;
    }

    addChosenElement(choice){
        Player.playerArray.push(choice)
    }

    // displayChoices(){
    // }
}
