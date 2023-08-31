import { useState } from "react";
import SignUpForm from "../../components_/SignUpForm/SignUpForm";

const Signup = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Signup />
        </>


    );
}

export default Signup;
