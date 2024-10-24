function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDark);
    updateButtonText();
}

function toggleDarkMode() {
    const isDark = !document.body.classList.contains('dark-mode');
    setDarkMode(isDark);
}

function updateButtonText() {
    const button = document.getElementById('darkModeToggle');
    if (button) {
        button.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }
}

function initDarkMode() {
    const darkModeStored = localStorage.getItem('darkMode');
    if (darkModeStored !== null) {
        setDarkMode(darkModeStored === 'true');
    }

    const button = document.getElementById('darkModeToggle');
    if (button) {
        button.addEventListener('click', toggleDarkMode);
    }

    updateButtonText();
}

document.addEventListener('DOMContentLoaded', initDarkMode);