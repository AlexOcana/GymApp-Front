import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { Button, Card, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const MyProfile = () => {

    const { loggedUser } = useContext(AuthContext)

    return (

        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="text-center">
                    <Card.Body>
                        <div className="rounded-circle mx-auto mt-3 m" style={{ width: '350px', height: '350px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={loggedUser.avatar} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </Card.Body>

                </Col>
                <Col>

                    <Card>
                        <Card.Title >
                            <h3>{loggedUser.firstname}</h3>
                            <h3>{loggedUser.lastname}</h3>
                        </Card.Title>
                        <Button variant="warning">Ed</Button>
                        <Button variant="danger">Go somewhere</Button>
                    </Card>

                </Col>
            </Row >
        </Container >

    );
}


export default MyProfile    