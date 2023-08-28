import { Container } from "react-bootstrap"
import VideoPlayer from "../../VideoPlayer/VideoPlayer"
import './homepage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Container


                className="d-flex justify-content-center ">

                <div className="video">
                    <VideoPlayer />
                </div>
                <h1>GymApp</h1>

            </Container >
        </div>
    )

}

export default HomePage