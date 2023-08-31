import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import LoginForm from "../../components_/LoginForm/LoginForm";

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <LoginForm handleClose={handleClose} />
            </Modal>
        </>
    );
}

export default Login;
