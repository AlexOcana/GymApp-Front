
import { Col, Container, ListGroup } from 'react-bootstrap'
import { Row, Button } from 'react-bootstrap'
import './NutricionalSuplements.css'
import productsServices from '../../services/products.services'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'



const NutricionalSuplements = () => {


    const [product, setProduct] = useState([])

    const [addProduct, setAddProduct] = useState([])
    console.log(addProduct)
    console.log('0000000000000', product)
    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)



    useEffect(() => {
        loadProducts()
    }, [])


    const loadProducts = () => {

        productsServices
            .getAllProducts()
            .then(({ data }) => setProduct(data))
            .catch(err => console.log(err))
    }

    const handleAddtoMyList = (_id) => {
        console.log("este es el id del producto que quiero añadir", _id)
        productsServices
            .sendProduct(_id)
            .then((data) => console.log(data))
            .catch(err => console.log(err))
    }

    // const handleDelete = (_id) => {

    //     productsServices
    //         .deleteProduct(_id)
    //         .then(() => navigate('/nutrition'))
    //         .catch((err) => console.log(err));
    // };


    return (


        <Container className='container-products'>

            {!product ?

                <h1>lOADING.....</h1>

                :

                product.map(({ name, brand, image, _id }, idx) => (
                    <Row key={idx} className='mt-5'>
                        <Col sm={2}>
                            <img className='product-image' src={image} alt={name} />
                        </Col>
                        <Col sm={7}>
                            <ListGroup >
                                <Col>
                                    <h2 className='protein-name '>{name}</h2>
                                    <ListGroup.Item className='d-flex product-details' style={{ border: 'none' }} >
                                        <h5><strong>Brand:</strong> {brand}</h5>
                                    </ListGroup.Item>
                                </Col>
                                <Col>

                                    <Button variant="warning" onClick={() => handleAddtoMyList(_id)}> Add to my list </Button>

                                    <Button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete Product of MyCart</Button>

                                    {!loggedUser && (
                                        <>
                                            <Button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete Product</Button>
                                        </>
                                    )}

                                </Col>
                            </ListGroup>
                            <hr />
                        </Col>
                    </Row>
                ))
            }

        </Container >
    );
}

export default NutricionalSuplements




