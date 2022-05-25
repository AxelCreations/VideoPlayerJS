class MediaPlayer {
    constructor(config) {
        this.play = () => {
            this.Media.play();
        };
        this.pause = () => {
            this.Media.pause();
        };
        this.mute = () => {
            this.Media.muted = true;
        };
        this.unmute = () => {
            this.Media.muted = false;
        };
        this.togglePlay = () => {
            if (this.Media.paused) {
                this.play();
            }
            else {
                this.pause();
            }
        };
        this.toggleMute = () => {
            this.Media.muted = !this.Media.muted;
        };
        this.Media = config.el;
        this.Plugins = config.plugins || [];
        this.Controls = config.controls || { togglePlay: null, toggleSound: null };
        this.Plugins.forEach(plugin => {
            plugin.execute(this);
        });
        this.Controls.togglePlay.onclick = () => {
            this.togglePlay();
            if (this.Media.paused) {
                this.Controls.togglePlay.innerHTML = "Play";
            }
            else {
                this.Controls.togglePlay.innerHTML = "Pause";
            }
        };
        this.Controls.toggleSound.onclick = () => {
            this.toggleMute();
            if (this.Media.muted) {
                this.Controls.toggleSound.innerHTML = "Unmute";
            }
            else {
                this.Controls.toggleSound.innerHTML = "Mute";
            }
        };
    }
}
export default MediaPlayer;
