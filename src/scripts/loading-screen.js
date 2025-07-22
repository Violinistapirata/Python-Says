const loadingScreen = document.querySelector('#loading-screen');
const blackoutScreen = document.querySelector('#blackout-screen');

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        blackoutScreen.style.opacity = '0';
    }, 1500);
    setTimeout(() => {
        blackoutScreen.classList.add('hidden');
    }, 2500);
};

window.addEventListener('load', () => {
    // Hide the loading screen after the window has fully loaded   
    hideLoadingScreen();
});