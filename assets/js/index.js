import ThemeToggler from './plugins/themeToggler.js';
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

//DOM Elements
const buttonToggleTheme = document.querySelector('#toggleTheme');
const video = document.querySelector('#video');

//Initialize plugins
const themeToggler = new ThemeToggler();

//Initialize Player with video and plugins
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
    ]
});

// Themes switcher
buttonToggleTheme.onclick = () => themeToggler.toggleTheme();

