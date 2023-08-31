import { useState, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import authService from "../../services/auth.services";

function LoginForm({ handleClose }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { authenticateUser, storeToken } = useContext(AuthContext);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService
            .login(loginData)
            .then(({ data }) => {
                console.log("Login response data:", data);
                storeToken(data.authToken);
                authenticateUser();
                handleClose();
                navigate("/");
            })
            .catch((err) => console.log("Login error:", err));
    };

    return (
        <>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={loginData.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={loginData.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={handleSubmit}>
                    Access
                </Button>
            </Modal.Footer>
        </>
    );
}

export default LoginForm;
