import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userServices from "../../services/users.services";
import { Form, Button } from "react-bootstrap";


const EditProfile = () => {

    const { id } = useParams();

    const navigate = useNavigate();

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

    const { firstname, lastname } = formData

    return (
        <div>
            {!formData ? (
                <p>Cargando...</p>
            ) : (
                <div>

                    <h2>Edit My Profyle</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="firstname">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="lastname">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastname"
                                value={lastname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar cambios
                        </Button>
                        <Link to={`/profile/${id}`} className='nav-link'>Cancelar</Link>
                    </Form>

                </div>
            )
            }
        </div >
    );
};

export default EditProfile;
