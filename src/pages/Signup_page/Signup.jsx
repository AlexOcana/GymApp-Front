import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom";


const signup = () => {

    // TODO: MAYTUSCULA EN NOMBRES DE COMPONENTES

    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = e => {
        const { value, name } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        authService
            .signup(signupData)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit">Register</Button>
            </div>

        </Form>

    );
}

export default signup;
