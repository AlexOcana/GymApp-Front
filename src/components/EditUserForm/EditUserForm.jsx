import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userServices from "../../services/users.services";
import { Form, Button, Row, Col } from "react-bootstrap";
import uploadServices from "../../services/upload.services";



const EditProfileForm = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const [loadingImage, setLoadingImage] = useState(false)

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        avatar: "",
    });


    useEffect(() => {
        loaderUser()
    }, []);

    const loaderUser = () => {

        userServices
            .getOneUser(id)
            .then(({ data }) => setFormData(data))
            .catch((err) => console.log(err));

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault()

        userServices
            .editUser(id, formData)
            .then(() => navigate(`/profile/${id}`))
            .catch((err) => console.log(err));
    };

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setFormData({ ...formData, avatar: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })

    }

    return (
        <>
            {!formData ? (
                <p>Cargando...</p>
            ) : (
                <div>

                    <h2>Edit My Profile</h2>

                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="firstname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" value={formData.firstname} onChange={handleInputChange} name="firstname" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lastname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" value={formData.lastname} onChange={handleInputChange} name="lastname" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="lastname">
                                    <Form.Label>Your Weigth in Kgs: </Form.Label>
                                    <Form.Control type="number" value={formData.weigth} onChange={handleInputChange} name="weigth" placeholder="kg" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="chest">
                                    <Form.Label>RM Kgs Chest Press: </Form.Label>
                                    <Form.Control type="number" value={formData.chest} onChange={handleInputChange} name="chest" placeholder="kg" />
                                </Form.Group>
                            </Col>

                            <Form.Group className="mb-3" controlId="chest">
                                <Form.Label>RM Kgs Squad Press: </Form.Label>
                                <Form.Control type="number" value={formData.squad} onChange={handleInputChange} name="squad" placeholder="kg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="routineType">
                                <Form.Label>Select a Routine Type: </Form.Label>
                                <Form.Control as="select" value={formData.routine} onChange={handleInputChange} name="routine">
                                    <option value="RAW">RAW</option>
                                    <option value="STRENGTH">STRENGTH</option>
                                    <option value="FULLBODY">FULL BODY</option>
                                    <option value="HIT">HIT</option>
                                    <option value="ENDURANCE">ENDURANCE</option>
                                    <option value="CARDIO">CARDIO</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="avatar">
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={formData.email} onChange={handleInputChange} name="email" />
                            </Form.Group>

                            <div className="d-grid d-flex justify-content-center">
                                <Button variant="success" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading Image...' : 'Save Changes'}</Button>
                                <Link to={`/profile/${id}`} className='btn btn-danger'>Cancelar</Link>
                            </div>
                        </Row >
                    </Form >
                </div>


            )}
        </>
    )
}

export default EditProfileForm;