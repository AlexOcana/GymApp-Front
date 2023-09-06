import { useEffect, useState, useContext } from "react";
import userServices from "../../services/users.services";
import routinesService from "../../services/routines.services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Card, ListGroup, Button, Dropdown } from "react-bootstrap";
import { AuthContext } from '../../contexts/auth.context';


const ProfileDetails = () => {

    const { loggedUser } = useContext(AuthContext);

    const { id: user_id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [routine, setRoutine] = useState([])
    const [friend, setFriend] = useState([])


    useEffect(() => {
        getUserDetails();
        getRoutinesByOwner()
    }, []);

    const getUserDetails = () => {
        userServices
            .getOneUser(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err));
    };

    const getRoutinesByOwner = () => {
        routinesService
            .getRoutinesByOwner(user_id)
            .then(({ data }) => setRoutine(data))
            .catch(err => console.log(err))

    }

    const handleUserDetele = (e) => {
        e.preventDefault()
        userServices
            .deleteUser(user_id)
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
                        <Col md={3}>
                            <div className="text-center mt-3">
                                <img src={user.avatar} alt="User Avatar" style={{ maxWidth: '350px', borderRadius: '20%' }} />
                            </div>
                            <Card className="mt-3">
                                <Card.Body>
                                    <Card.Title className="text-center"><h2>{user.firstname} {user.lastname} ({user.role})</h2></Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item>
                                        <h6> ⚖️ Actual Weight: {user.weigth} kg </h6>
                                        <h6> 🏋🏻‍♂️ Favourite routines: {user.routine}</h6>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <h6> Best RM Chest Press : {user.chest} kg </h6>
                                        <h6> Best RM Squad Press : {user.squad} kg </h6>

                                    </ListGroup.Item>
                                </ListGroup>

                                {loggedUser && loggedUser.role === 'ADMIN' && (
                                    <Card.Body className="text-center d-flex">
                                        <Button onClick={handleUserDetele} className="btn btn-danger mr-2">Delete Profile</Button>
                                        <Link to={`/editProfilePage/${user._id}`} className="btn btn-warning">Edit my Profile</Link>
                                    </Card.Body>
                                )}
                            </Card>
                        </Col>
                        <Col md={3}>
                            <h3>My Routines</h3>
                            <Dropdown.Menu show>
                                {routine.map((elm, idx) => (
                                    <Dropdown.Item to={`/routines/${elm._id}`} eventKey="1">Action</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Col>
                        <Col md={3}>
                            <h3>My Products list</h3>
                            <Dropdown.Menu show>
                                {routine.map((elm, idx) => (
                                    <Dropdown.Item to={`/routines/${elm._id}`} eventKey="1">Action</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Col>


                        <Col md={2}>
                            <h3>My Gym Bros</h3>
                            <Dropdown.Menu show>
                                {user.gymbro.map((elm, idx) => {
                                    return (
                                        <Dropdown.Item>{elm.firstname}<img src={elm.avatar} style={{ width: '50px', borderRadius: '50%', height: '50px' }} /></Dropdown.Item>
                                    )
                                }
                                )}
                            </Dropdown.Menu>

                        </Col>
                    </Row>
                )
            }
        </div >
    );
}

export default ProfileDetails;