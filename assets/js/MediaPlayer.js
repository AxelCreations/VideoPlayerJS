class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.controls = config.controls || {};

        this.plugins.forEach((plugin) => {
            plugin.execute(this);
        });

        this.controls.togglePlay.onclick = () => {
            this.togglePlay();
            if (this.media.paused) {
                this.controls.togglePlay.innerHTML = "Play";
            } else {
                this.controls.togglePlay.innerHTML = "Pause";
            }
        };

        this.controls.toggleSound.onclick = () => {
            this.toggleMute();
            if (this.media.muted) {
                this.controls.toggleSound.innerHTML = "Unmute";
            } else {
                this.controls.toggleSound.innerHTML = "Mute";
            }
        };
    }

    play = () => {
        this.media.play();
    };

    pause = () => {
        this.media.pause();
    };

    mute = () => {
        this.media.muted = true;
    };

    unmute = () => {
        this.media.unmuted = false;
    };

    togglePlay = () => {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    };

    toggleMute = () => {
        this.media.muted = !this.media.muted;
    };
}

export default MediaPlayer;