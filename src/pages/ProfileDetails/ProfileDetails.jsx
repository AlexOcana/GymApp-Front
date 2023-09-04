import { useEffect, useState } from "react";
import userServices from "../../services/users.services";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ProfileDetails = () => {

    const { id } = useParams()

    const [user, setUser] = useState(null);

    useEffect(() => {
        UserDetails();
    }, []);

    const UserDetails = () => {
        userServices
            .getOneUser(id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err));
    };

    return (

        <div>
            {!user ?
                <p>Cargando...</p>
                :
                (
                    <Row className="mt-4 justify-content-center">
                        <Col md={6}>
                            <div className="text-center mt-3">
                                <img src={user.avatar} alt="User Avatar" style={{ maxWidth: '350px', borderRadius: '20%' }} />
                            </div>
                            <Card className="mt-3">
                                <Card.Body>
                                    <Card.Title className="text-center">{user.firstname} {user.lastname}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item>Profile: {user.role}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body className="text-center">
                                    <Link to={`/delete/${user._id}`} className="btn btn-danger mr-2">Delete Profile</Link>
                                    <Link to={`/editProfile/${user._id}`} className="btn btn-warning">Edit my Profile</Link>
                                </Card.Body>
                            </Card>
                            <ListGroup>
                                <ListGroupItem>
                                    <p>Mis Rutinas</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                )
            }
        </div >
    );
};

export default ProfileDetails;
