const loadingScreen = document.querySelector('#loading-screen');

function hideLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
};

hideLoadingScreen();