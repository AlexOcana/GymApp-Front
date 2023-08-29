import { Container } from "react-bootstrap"
import VideoPlayer from "../../VideoPlayer/VideoPlayer"
import './homepage.css'

const HomePage = () => {
    return (
        <div className="HomePage">

            <Container>

                <div className="video">

                    <VideoPlayer />
                </div>
                <h1>GymApp</h1>

            </Container >
        </div>
    )

}

export default HomePage