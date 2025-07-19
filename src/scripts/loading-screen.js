const loadingScreen = document.querySelector('#loading-screen');

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
};

window.addEventListener('load', () => {
    // Hide the loading screen after the window has fully loaded   
    hideLoadingScreen();
});