import MediaPlayer from "../MediaPlayer";

interface IPlugin {
    execute(player: MediaPlayer): void;
}

export default IPlugin;