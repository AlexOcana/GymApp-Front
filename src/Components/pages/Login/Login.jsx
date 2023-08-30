import { useContext, useState } from "react"
import { Form, Button, Modal } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"


const Login = () => {


    const [showModal, setShowModal] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const { authenticateUser, storeToken } = useContext(AuthContext);

    const handleInputChange = e => {
        const { value, name } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitting login data:", loginData);
        authService
            .login(loginData)
            .then(({ data }) => {
                console.log("Login response data:", data);
                storeToken(data.authToken);
                authenticateUser();
                console.log("User authenticated. Navigating to /");
                navigate('/');
            })
            .catch(err => console.log("Login error:", err));
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    console.log("Rendering Login component");

    return (
        <>
            <Button variant="dark" onClick={handleShow}>Login</Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="dark" onClick={handleSubmit} >Access</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;
