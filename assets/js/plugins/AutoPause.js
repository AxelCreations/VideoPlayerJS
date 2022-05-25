class AutoPause {
    constructor() {
        this.Threshold = 0.7;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    execute(player) {
        this.Player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.Threshold,
        });
        observer.observe(this.Player.Media);
        //Pause when the tab is inactive
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    handleIntersection(entries) {
        const entry = entries[0];
        if (entry.intersectionRatio > this.Threshold) {
            this.Player.play();
        }
        else {
            this.Player.pause();
        }
    }
    ;
    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.Player.play();
        }
        else {
            this.Player.pause();
        }
    }
}
export default AutoPause;
