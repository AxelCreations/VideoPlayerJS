import IPlugin from "./IPlugin";

export interface IControls {
    togglePlay: HTMLBodyElement;
    toggleSound: HTMLBodyElement;
}

interface IMediaConfig {
    el: HTMLMediaElement,
    plugins: Array<IPlugin>,
    controls: IControls
}

export default IMediaConfig;