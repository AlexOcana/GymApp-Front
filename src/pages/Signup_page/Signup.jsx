import { useState } from 'react'


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