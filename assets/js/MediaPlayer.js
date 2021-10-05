class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.plugins.forEach(plugin => {
            plugin.execute(this);
        });
    }

    play = () => {
        this.media.play();
    }
    
    pause = () => {
        this.media.pause();
    }

    mute = () => {
        this.media.muted = true;
    }
    
    unmute = () => {
        this.media.unmuted = false;
    }

    togglePlay = () => {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    toggleMute = () => {
        this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer;