
const backgroundMusic = document.getElementById("backgroundMusic");

function startMusic() {
    backgroundMusic.play(); // Starts the music
}

function stopMusic() {
    backgroundMusic.pause(); // Stops the music
    backgroundMusic.currentTime = 0; // Restarts the music to the beginning
}

// stopMusic();



