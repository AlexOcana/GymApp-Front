import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.services";


const Signup = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)

                setLoadingImage(false)
            })
    }

    return (
        <>
            <SignUpForm />
        </>


    );
}

export default Signup;
