const loadingScreen = document.querySelector('#loading-screen');
const blackoutScreen = document.querySelector('#blackout-screen');
const loadingContainer = document.querySelector('#loading-container');
const loadedContainer = document.querySelector('#loaded-container');

function showStartGameButton() {
    loadingContainer.classList.add('hidden');
    loadedContainer.classList.remove('hidden');
}

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        blackoutScreen.style.opacity = '0';
    }, 1500);
    setTimeout(() => {
        blackoutScreen.classList.add('hidden');
        toggleMusic();
    }, 2500);
};

// Show the Start button after the window has fully loaded   
window.addEventListener('load', () => {
    showStartGameButton();
});