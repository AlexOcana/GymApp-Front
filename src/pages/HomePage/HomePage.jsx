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



            </Container >
        </div>
    )

}

export default HomePage