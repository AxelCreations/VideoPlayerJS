import ThemeToggler from './plugins/themeToggler.js';

// Themes switcher
const themeToggler = new ThemeToggler;
const buttonToggleTheme = document.querySelector('#toggleTheme');

buttonToggleTheme.onclick = () => themeToggler.toggleTheme();