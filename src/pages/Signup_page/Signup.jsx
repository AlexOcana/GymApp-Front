import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <SignUpForm />
        </>


    );
}

export default Signup;
