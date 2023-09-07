import ReactPlayer from "react-player"

const VideoPlayer = () => {

    return (
        <ReactPlayer
            width={'100vw'}
            height={'100vh'}
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            url={''}
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