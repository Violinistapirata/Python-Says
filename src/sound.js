class SoundEffect {
    constructor(src) {
        this.src = src;
    }

    
}

function playSoundEffect(src) {
    const audio = document.querySelector("#sound-effect");
    audio.src = src;
    audio.play();
}