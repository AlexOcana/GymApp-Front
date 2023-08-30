<<<<<<< HEAD
import { Container } from "react-bootstrap"
=======
>>>>>>> bfa216676aa77f35c7cc4d1343e7fe469fe9a8b6
import VideoPlayer from "../../components_/VideoPlayer/VideoPlayer"
import './homepage.css'

const HomePage = () => {
    return (

        <>

            <div className="video">
                <VideoPlayer />
            </div>

            <h1>{import.meta.env.VITE_APP_NAME}</h1>
        </>
    )

}

export default HomePage