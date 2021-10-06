import MediaPlayer from '../MediaPlayer.js';

class AutoPlay {
    constructor() {}

    public execute = (player: MediaPlayer): void => {
        player.mute();
        player.play();
    };
}

export default AutoPlay;