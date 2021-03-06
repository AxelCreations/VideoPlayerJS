import ThemeToggler from './plugins/themeToggler.js';
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

//DOM Elements
const buttonToggleTheme: HTMLBodyElement = document.querySelector('#toggleTheme');

const video: HTMLMediaElement = document.querySelector('#video');
const buttonTogglePlay: HTMLBodyElement = document.querySelector('#togglePlay');
const buttonToggleSound: HTMLBodyElement = document.querySelector('#toggleSound');

//Initialize plugins
const themeToggler: ThemeToggler = new ThemeToggler();

//Initialize Player with video and plugins
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ],
    controls: {
        togglePlay: buttonTogglePlay,
        toggleSound: buttonToggleSound,
    }
});

// Themes switcher
buttonToggleTheme.onclick = () => themeToggler.toggleTheme();

//Service Workers
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .catch(error => {console.error(error.message)});
// }