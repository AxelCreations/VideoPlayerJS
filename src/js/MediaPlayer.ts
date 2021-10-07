import IMediaConfig, {IControls} from "./utils/IMediaConfig";
import IPlugin from "./utils/IPlugin";

class MediaPlayer {
    Media: HTMLMediaElement;
    Plugins: Array<IPlugin>;
    Controls: IControls;

    constructor(config: IMediaConfig) {
        this.Media = config.el;
        this.Plugins = config.plugins || [];
        this.Controls = config.controls || {togglePlay: null, toggleSound: null};

        this.Plugins.forEach(plugin => {
            plugin.execute(this);
        });

        this.Controls.togglePlay.onclick = () => {
            this.togglePlay();
            if (this.Media.paused) {
                this.Controls.togglePlay.innerHTML = "Play";
            } else {
                this.Controls.togglePlay.innerHTML = "Pause";
            }
        };

        this.Controls.toggleSound.onclick = () => {
            this.toggleMute();
            if (this.Media.muted) {
                this.Controls.toggleSound.innerHTML = "Unmute";
            } else {
                this.Controls.toggleSound.innerHTML = "Mute";
            }
        };
    }

    public play = () => {
        this.Media.play();
    };

    public pause = () => {
        this.Media.pause();
    };

    public mute = () => {
        this.Media.muted = true;
    };

    public unmute = () => {
        this.Media.muted = false;
    };

    public togglePlay = () => {
        if (this.Media.paused) {
            this.play();
        } else {
            this.pause();
        }
    };

    public toggleMute = () => {
        this.Media.muted = !this.Media.muted;
    };
}

export default MediaPlayer;