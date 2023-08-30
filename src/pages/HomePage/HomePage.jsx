import { Container } from "react-bootstrap"
import VideoPlayer from "../../components_/VideoPlayer/VideoPlayer"
import './homepage.css'

const HomePage = () => {
    return (
        <div className="HomePage">

            <Container>

                <div className="video">
                    <VideoPlayer />
                </div>

                <h1>{import.meta.env.VITE_APP_NAME}</h1>

            </Container >
        </div>
    )

}

export default HomePage