class AutoPlay {
    constructor() {
        this.execute = (player) => {
            player.mute();
            player.play();
        };
    }
}
export default AutoPlay;
