import MediaPlayer from '../MediaPlayer.js';
import IPlugin from '../utils/IPlugin.js';

class AutoPlay implements IPlugin {
    constructor() {}

    public execute = (player: MediaPlayer): void => {
        player.mute();
        player.play();
    };
}

export default AutoPlay;