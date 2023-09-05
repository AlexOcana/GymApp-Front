
import { Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Row, Button } from 'react-bootstrap'
import { PRODUCT_TYPES } from '../../consts/nutrition.consts'
import './NutricionalSuplements.css'


const NutricionalSuplements = () => {
    return (
        <Container>
            <h1 className='mt-4'>Trust in your Muscle...💪</h1>
            {PRODUCT_TYPES.map((elm, idx) => (
                <Row key={idx} className='mt-5'>
                    <Col sm={2}>
                        <img className='product-image' src={elm.image} alt={elm.name} />
                    </Col>
                    <Col sm={10}>
                        <ListGroup>
                            <h2 className='protein-name'>{elm.name}</h2>
                            <ListGroup.Item>
                                <p><strong>Brand:</strong> {elm.brand}</p>
                                <Button variant="warning">Add to my cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default NutricionalSuplements

// <div className="Products">
//     <Container>
//         <Row className='FirstRow'>
//             {PRODUCT_TYPES.map((elm, idx) => (
//                 <Col key={`${elm.name}-${idx}`} className="col-md-4 mb-4">
//                     <Card className="custom-card">
//                         <h2>{elm.name}</h2>
//                         <p>{elm.brand}</p>
//                         <Card.Img variant="top" src={elm.image} alt="Card Image" />
//                         <div className="overlay">
//                             <span>{elm.name}</span>
//                         </div>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     </Container>
// </div>




