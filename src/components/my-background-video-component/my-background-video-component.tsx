import { Component, Prop, Element, h } from '@stencil/core';

@Component({
    tag: 'my-background-video-component',
    styleUrl: 'my-background-video-component.css',
    shadow: true
})

export class MyBackgroundVideoComponent {
    @Prop() src: string;
    @Prop() poster: string;
    @Prop() muted: boolean = true;

    @Element() private videoElement: HTMLVideoElement;

    componentDidLoad() {
        if (this.muted) {
            this.videoElement.muted = true;
        }
    }

    render() {
        return <video autoplay loop playsinline preload="auto" 
        muted={this.muted} src={this.src} poster={this.poster}></video>;
    }
}