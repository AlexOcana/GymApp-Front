import ReactPlayer from "react-player"

const VideoPlayer = () => {

    return (
        <ReactPlayer
            width={window.innerWidth}
            height={window.innerWidth}
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            url={'https://www.youtube.com/watch?v=Dbw-lVCWszA'}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    )
}

export default VideoPlayer