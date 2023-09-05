import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import authService from "../../services/auth.services";
import { useNavigate } from "react-router-dom";
import uploadServices from "../../services/upload.services";



function SignUpForm({ handleClose }) {
    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        avatar: '',
        chest: '',
        squad: '',
        routine: '',
        weigth: ''
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
            .then(() => {
                handleClose()
                navigate('/')
            })
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
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastname" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Your Weigth in Kgs: </Form.Label>
                        <Form.Control type="number" value={signupData.weigth} onChange={handleInputChange} name="weigth" placeholder="kg" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="chest">
                        <Form.Label>RM Kgs Chest Press: </Form.Label>
                        <Form.Control type="number" value={signupData.chest} onChange={handleInputChange} name="chest" placeholder="kg" />
                    </Form.Group>
                </Col>

                <Form.Group className="mb-3" controlId="chest">
                    <Form.Label>RM Kgs Squad Press: </Form.Label>
                    <Form.Control type="number" value={signupData.squad} onChange={handleInputChange} name="squad" placeholder="kg" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="routineType">
                    <Form.Label>Select a Routine Type: </Form.Label>
                    <Form.Control as="select" value={signupData.routine} onChange={handleInputChange} name="routine">
                        <option value="RAW">RAW</option>
                        <option value="STRENGTH">STRENGTH</option>
                        <option value="FULLBODY">FULL BODY</option>
                        <option value="HIT">HIT</option>
                        <option value="ENDURANCE">ENDURANCE</option>
                        <option value="CARDIO">CARDIO</option>
                    </Form.Control>
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
            </Row >
        </Form >
    );
}
export default SignUpForm;