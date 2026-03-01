let count = 0;
const btn = document.getElementById('counter-btn');
const countSpan = document.getElementById('count');

// Dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const isDarkTheme = localStorage.getItem('theme') === 'dark';

if (isDarkTheme) {
    body.classList.add('dark-theme');
}

btn.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
});

themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', currentTheme);
});

// Apply dark theme styles
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    }
});

document.querySelectorAll('.portfolio-about').forEach(section => {
    if (section.classList.contains('dark-theme')) {
        section.style.backgroundColor = '#121212';
        section.style.color = '#e0e0e0';
        section.style.transition = 'background-color 0.3s, color 0.3s';
    }
});