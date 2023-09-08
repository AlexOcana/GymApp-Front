import ReactPlayer from "react-player"

const VideoPlayer = () => {

    return (
        <ReactPlayer
            width={'100%'}
            height={'100vh'}
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            url={'https://res.cloudinary.com/daqyvggzm/video/upload/v1694167376/videoplayback_ohyhxw.webm'}
            style={{
                position: 'absolute',
                objectFit: 'cover',
                backgroundColor: 'black',
                top: 0,
                left: 0,
                overflow: 'hidden',
                zIndex: -1,
            }}
        />
    )
}

export default VideoPlayer