import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import SignUpForm from "../../components_/SignUpForm/SignUpForm";

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
