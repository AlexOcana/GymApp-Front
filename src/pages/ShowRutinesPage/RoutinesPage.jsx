
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Routines.css'
import { ROUTINE_TYPES } from '../../consts/routine.consts';


const RoutinesPage = () => {
    return (
        <div className="Routines">
            <h2>Select your Routine and Be a BEAST...!!!</h2>
            <Container>
                <Row className='FirstRow'>
                    {ROUTINE_TYPES.map((elm, idx) => (
                        <Col key={`${elm.name}-${idx}`} className="col-md-4 mb-4">
                            <Card className="custom-card">
                                <Link to={`/routines/${elm.name}`} className="image-button">
                                    <Card.Img variant="top" src={elm.image} alt="Card Image" />
                                    <div className="overlay">
                                        <span>{elm.name}</span>
                                    </div>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
export default RoutinesPage





