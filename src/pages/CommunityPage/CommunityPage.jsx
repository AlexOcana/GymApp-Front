import { useEffect, useState } from "react"
import userServices from "../../services/users.services"
import { Col, Card, ListGroup, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"




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
                        <Row className="mt-4 mb-3">
                            <Col md={4}>
                                <Card.Img
                                    src={user.avatar}
                                    style={{ maxWidth: '300px' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card key={user._id} className="justify-content-between">
                                    <Card.Body>
                                        <Card.Title className="text-center">
                                            {user.firstname} {user.lastname}
                                        </Card.Title>
                                        <ListGroup className="list-group-flush text-center">
                                            <ListGroup.Item>Profile: {user.role}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                                        <Link to={`/profile/${user._id}`} className="btn btn-primary">
                                            See Profile
                                        </Link>
                                        <Link to="#" className="btn btn-secondary mt-2">
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

