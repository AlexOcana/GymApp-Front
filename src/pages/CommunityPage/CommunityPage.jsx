import { useEffect, useState } from "react"
import userServices from "../../services/users.services"
import { Col, Card, ListGroup, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './CommunityPage.css'




const CommunityPage = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        loadUsers()
    }, [])

    userServices
    const loadUsers = () => {
        userServices
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container className="mt-3">
            {!users ? (
                <p>Cojones...</p>
            ) : (
                users.map((user) => {
                    return (
                        <Row key={user._id} className="mt-4 mb-3 user-details">
                            <Col md={4}>
                                <Card.Img className="avatar-img" src={user.avatar} />
                            </Col>
                            <Col md={8}>
                                <Card key={user._id} className="justify-content-between">
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            {user.firstname} {user.lastname} ({user.role})
                                        </Card.Title>
                                        <ListGroup className="list-group-flush text-center">
                                            <ListGroup.Item>Favourite Routine: {user.routine}</ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <ListGroup.Item>RM Chest: {user.chest} Kg</ListGroup.Item>
                                                </Col>
                                                <Col>
                                                    <ListGroup.Item>RM Squat: {user.squad} Kg</ListGroup.Item>
                                                </Col>
                                            </Row>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Body className="d-flex justify-content-center  ">
                                        <Link to={`/profile/${user._id}`} className="btn btn-primary buttons-edit">
                                            See Profile
                                        </Link>
                                        <Link to="#" className="btn btn-secondary">
                                            Add Gym Bro
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    );
                })
            )}
        </Container>


    )
}
export default CommunityPage

