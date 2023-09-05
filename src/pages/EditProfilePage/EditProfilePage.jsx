import { Container } from "react-bootstrap"
import EditProfileForm from "../../components/EditUserForm/EditUserForm"

const EditProfileUser = () => {

    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>Edit your profile...</h1>
                <EditProfileForm />
            </Container >
        </div >
    )

}

export default EditProfileUser