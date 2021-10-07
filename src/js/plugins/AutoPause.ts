import MediaPlayer from '../MediaPlayer';
import IPlugin from '../utils/IPlugin';

class AutoPause implements IPlugin {
    private Threshold: number;
    private Player: MediaPlayer;

    constructor() {
        this.Threshold = 0.7;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    public execute(player: MediaPlayer): void {
        this.Player = player;

        const observer: IntersectionObserver = new IntersectionObserver(this.handleIntersection, {
            threshold: this.Threshold,
        });

        observer.observe(this.Player.Media);

        //Pause when the tab is inactive
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    private handleIntersection(entries: IntersectionObserverEntry[]): void {
        const entry = entries[0];

        if (entry.intersectionRatio > this.Threshold) {
            this.Player.play();
        } else {
            this.Player.pause();
        }
    };

    private handleVisibilityChange(): void {
        const isVisible: boolean = document.visibilityState === "visible";
        
        if (isVisible) {
            this.Player.play();
        } else {
            this.Player.pause();
        }
    }
}

export default AutoPause;