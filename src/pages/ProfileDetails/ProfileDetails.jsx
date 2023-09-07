import { useEffect, useState, useContext } from "react";
import userServices from "../../services/users.services";
import routinesService from "../../services/routines.services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Card, ListGroup, Button, Dropdown } from "react-bootstrap";
import { AuthContext } from '../../contexts/auth.context';
import productsServices from '../../services/products.services'
import EditProfileForm from "../../components/EditUserForm/EditUserForm";



const ProfileDetails = () => {

    const { loggedUser } = useContext(AuthContext);

    const { id: user_id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [routine, setRoutine] = useState([])
    const [products, setProducts] = useState([])

    console.log(routine)
    useEffect(() => {
        getUserDetails();
        getRoutinesByOwner()
        loggedUser && getProducts()
    }, [user_id, loggedUser]);

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

    const getProducts = () => {

        userServices
            .getUserInfo('products', loggedUser._id)
            .then(({ data }) => setProducts(data.products))
            .catch(err => console.log(err))
    }

    const handleUserDetele = (e) => {
        e.preventDefault()
        userServices
            .deleteUser(user_id)
            .then(() => navigate('/community'))
            .catch((err) => console.log(err));
    };


    const handleRemove = (_id) => {
        console.log("producto a eliminar de la lista de usuario", _id)
        productsServices
            .removeProduct(_id)
            .then(() => {
                getProducts()
                getUserDetails()
            })
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
                                <img src={user.avatar} alt="User Avatar" style={{ maxWidth: '250px', borderRadius: '30%' }} />
                            </div>
                            <Card className="mt-3">
                                <Card.Body>
                                    <Card.Title className="text-center"><h5>{user.firstname} {user.lastname} ({user.role})</h5></Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item>
                                        <p> ⚖️ Actual Weight: {user.weigth} kg </p>
                                        <p> 🏋🏻‍♂️ Favourite routines: {user.routine}</p>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <p> Best RM Chest Press : {user.chest} kg </p>
                                        <p> Best RM Squad Press : {user.squad} kg </p>

                                    </ListGroup.Item>
                                </ListGroup>

                                {(loggedUser.role === 'ADMIN' || loggedUser._id === user._id) && (
                                    <Card.Body className="text-center d-flex">
                                        <Button onClick={handleUserDetele} className="btn btn-danger mr-2">Delete Profile</Button>
                                        <EditProfileForm getUserDetails={getUserDetails} />
                                        {/* <Link to={`/editProfile/${user._id}`} className="btn btn-warning">Edit my Profile</Link> */}
                                    </Card.Body>
                                )}
                            </Card>
                        </Col>

                        <Col md={3}>
                            <h3>My Routines</h3>
                            <Dropdown.Menu show>
                                {routine.map((elm, idx) => (
                                    <Dropdown.Item key={idx} eventKey="1"><Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/routine/${elm._id}`} >{elm.title} </Link></Dropdown.Item>
                                ))}
                            </Dropdown.Menu>


                        </Col>
                        <Col md={3}>
                            <h3>My Products list</h3>
                            {
                                products.map((elm, idx) => {
                                    return (
                                        <>
                                            <h5>{elm.name}</h5>
                                            <Button variant='danger' onClick={() => handleRemove(elm._id)} className="btn btn-danger">Remove Product</Button>
                                        </>
                                    )
                                }
                                )
                            }

                        </Col>

                        <Col md={2}>
                            <h3>My Gym Bros</h3>
                            {
                                user.gymbro.map((elm, idx) => {

                                    return (
                                        <ul>
                                            <li><Link style={{ fontSize: '1.3em', padding: '9px' }} to={`/profile/${elm._id}`}>{elm.firstname} <img src={elm.avatar} style={{ width: '40px', borderRadius: '50%', marginLeft: '20px', borderColor: 'black', border: '1px solid black' }} /> </Link></li>
                                        </ul>
                                    )
                                }
                                )
                            }

                        </Col>
                    </Row>
                )
            }
        </div >
    );
}

export default ProfileDetails;