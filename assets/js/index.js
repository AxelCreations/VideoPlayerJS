import ThemeToggler from './plugins/themeToggler.js';
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

//DOM Elements
const buttonToggleTheme = document.querySelector('#toggleTheme');

const video = document.querySelector('#video');
const buttonTogglePlay = document.querySelector('#togglePlay');
const buttonToggleSound = document.querySelector('#toggleSound');

//Initialize plugins
const themeToggler = new ThemeToggler();

//Initialize Player with video and plugins
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
    ],
    controls: {
        togglePlay: buttonTogglePlay,
        toggleSound: buttonToggleSound,
    }
});

// Themes switcher
buttonToggleTheme.onclick = () => themeToggler.toggleTheme();