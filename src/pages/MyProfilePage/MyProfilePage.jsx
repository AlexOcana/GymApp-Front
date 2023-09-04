import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { Button, Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import userServices from "../../services/users.services";
import { Link, useNavigate, useParams } from 'react-router-dom';


const MyProfile = () => {

    const { loggedUser } = useContext(AuthContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()

        userServices
            .deleteUser(id)
            .then(() => navigate('/community'))
            .catch((err) => console.log(err));
    };

    return (

        <Container className='mt-5'>
            <Row className="d-flex justify-content-center align-items-center">
                <h1>My Profile: @{loggedUser.firstname}</h1>
                <Col className="text-center mt-3">
                    <Card.Body>

                        <div className="rounded-circle mx-auto mt-3 " style={{ width: '350px', height: '350px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={loggedUser.avatar} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </Card.Body>

                </Col>
                <Col>

                    <h2>GymBro Details...</h2>
                    <Card>

                        <Card.Title className='text-center'>
                            <h3>Name: {loggedUser.firstname}</h3>
                            <h3>Last Name: {loggedUser.lastname}</h3>
                            <h5>Favourite routines: {loggedUser.routine} </h5>
                            <h5>Best Chest Rm: {loggedUser.chest} </h5>
                            <h5>Best Squad Press Rm:{loggedUser.squad} </h5>
                            <h5>Actual Weight:{loggedUser.weigth} </h5>

                        </Card.Title>
                        <Link to={`/editProfile/${loggedUser._id}`} className="btn btn-warning">Edit my Profile</Link>
                        <form onSubmit={handleSubmit}>
                            <Button type="submit" className="btn btn-danger mr-2">Delete Profile</Button>
                        </form>
                    </Card>

                </Col>
            </Row >
        </Container >

    );
}


export default MyProfile    