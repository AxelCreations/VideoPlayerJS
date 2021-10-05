class AutoPlay {
    constructor() {}

    execute = (player) => {
        player.mute();
        player.play();
    };
}

export default AutoPlay;