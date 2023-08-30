
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Routines.css'

const Routines = () => {
    Link
    return (

        <div className="Routines">
            <h2 >Select your Routine and Be a BEAST...!!!</h2>
            <Container>
                <Row className='FirstRow'>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/raw-routines'} className="image-button">
                                <Card.Img variant="top" src="/gym 2.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>RAW </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/strength-routines'} className="image-button">
                                <Card.Img variant="top" src="/gym 1.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>STRENGTH </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/fullbody-routines'} className="image-button">
                                <Card.Img variant="top" src="/hit.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>FULL BODY </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/hit-routines'} className="image-button">
                                <Card.Img variant="top" src="/gym3.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>HIT </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/endurance-routines'} className="image-button">
                                <Card.Img variant="top" src="/endurance.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>ENDURANCE </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Link to={'/cardio-routines'} className="image-button">
                                <Card.Img variant="top" src="/cardio.jpg" alt="Card Image" />
                                <div className="overlay">
                                    <span>CARDIO </span>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}
export default Routines





