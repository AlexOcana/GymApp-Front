import { useEffect, useState } from "react";
import userServices from "../../services/users.services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { AuthContext } from '../../contexts/auth.context';

const ProfileDetails = () => {

    const { loggedUser } = useContext(AuthContext);

    const { id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        userServices
            .getOneUser(id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err));
    };

    const handleUserDetele = (e) => {
        e.preventDefault()
        userServices
            .deleteUser(id)
            .then(() => navigate('/community'))
            .catch((err) => console.log(err));
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
                                    <Card.Title className="text-center"><h2>{user.firstname} {user.lastname}</h2></Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item>Profile: {user.role}</ListGroup.Item>
                                </ListGroup>

                                {loggedUser && loggedUser.role === 'ADMIN' && (
                                    <Card.Body className="text-center d-flex">
                                        <Button onClick={handleUserDetele} className="btn btn-danger mr-2">Delete Profile</Button>
                                        <Link to={`/editProfile/${user._id}`} className="btn btn-warning">Edit my Profile</Link>
                                    </Card.Body>
                                )}
                            </Card>
                            <ListGroup>
                                <ListGroupItem>
                                    <h4>Mis Rutinas</h4>
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