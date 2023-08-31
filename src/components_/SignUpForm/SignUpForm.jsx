import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.services";
import { useNavigate } from "react-router-dom";
// import uploadServices from "../../services/upload.services";

function SignUpForm() {
    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        avatar: ''
    });

    const navigate = useNavigate();

    const [loadingImage, setLoadingImage] = useState(false)
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
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
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
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading Image...' : 'Register'}</Button>
            </div>
        </Form>
    );
}

export default SignUpForm;
