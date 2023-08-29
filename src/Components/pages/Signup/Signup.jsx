import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
// import authService from "../../services/auth.services";
// import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [showModal, setShowModal] = useState(false);

    // const [signupData, setSignupData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     firstName: '',
    //     lasttName: '',
    //     icon: ''
    // });

    // const navigate = useNavigate();

    // const handleInputChange = e => {
    //     const { value, name } = e.target;
    //     setSignupData({ ...signupData, [name]: value });
    // };

    // const handleFormSubmit = e => {
    //     e.preventDefault();
    //     authService
    //         .signup(signupData)
    //         .then(() => navigate('/home'))
    //         .catch(err => console.log(err));
    // };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        // <Form onSubmit={handleFormSubmit}>

        //     <Form.Group className="mb-3" controlId="email">
        //         <Form.Label>Email</Form.Label>
        //         <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="password">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="firstName">
        //         <Form.Label>First Name</Form.Label>
        //         <Form.Control type="firstName" value={signupData.firstName} onChange={handleInputChange} name="firstName" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="lasttName">
        //         <Form.Label>Last Name</Form.Label>
        //         <Form.Control type="lasttName" value={signupData.firstName} onChange={handleInputChange} name="lasttName" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="icon">
        //         <Form.Label>Last Name</Form.Label>
        //         <Form.Control type="icon" value={signupData.icon} onChange={handleInputChange} name="icon" />
        //     </Form.Group>

        //     <div className="d-grid">
        //         <Button variant="dark" type="submit">Register</Button>
        //     </div>

        // </Form>

        <>
            <Button variant="dark" onClick={handleShow}>Signup</Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lasttName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lasttName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="icon">
                            <Form.Label>Icon</Form.Label>
                            <Form.Control type="text" name="icon" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="dark" /* onClick={handleFormSubmit} */>Register</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Signup;
