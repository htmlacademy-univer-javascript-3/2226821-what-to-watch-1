type VideoPlayerProps = {
    src: string;
    poster: string;
    muted: boolean;
}

export const VideoPlayer = (props: VideoPlayerProps): JSX.Element => (
  <video src={props.src} poster={props.poster} muted={props.muted} autoPlay width="280" height="175" />
);

