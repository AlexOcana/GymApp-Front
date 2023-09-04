import { useEffect, useState } from "react"
import userServices from "../../services/users.services"
import { Col, Card, ListGroup, Row, Container } from "react-bootstrap"



const CommunityPage = () => {

    const [users, setUsers] = useState()

    console.log(users)

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
            {
                !users
                    ?
                    <p>Cojones...</p>
                    :
                    users.map(user => {

                        return (
                            <Row className="mt-4 mb-3">
                                <Card.Img variant="top" src={user.avatar} style={{ maxWidth: '250px' }} />
                                <Col>
                                    <Card key={user._id}>
                                        <Card.Body>
                                            <Card.Title>{user.firstname} {user.lastname}</Card.Title>

                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Profile: {user.role}</ListGroup.Item>

                                        </ListGroup>
                                        <Card.Body className="d-flex align-items-rigth">
                                            <Card.Link href="/profile">See Profile</Card.Link>
                                            <Card.Link href="#">Add Gym Bro</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    }
                    )
            }
        </Container>

    )
}
export default CommunityPage

