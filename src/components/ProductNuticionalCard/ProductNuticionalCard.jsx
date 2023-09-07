import { Col, Container, ListGroup } from 'react-bootstrap'
import { Row, Button } from 'react-bootstrap'
import productsServices from '../../services/products.services'
import { AuthContext } from '../../contexts/auth.context'
import { useState, useEffect, useContext } from 'react'


const ProductNuticionalCard = ({ product, userData, loadProducts, productsUserLogged }) => {

    const { loggedUser } = useContext(AuthContext)

    const handleAddtoMyList = (_id) => {
        productsServices
            .sendProduct(_id)
            .then(() => {
                loadProducts()
                productsUserLogged();
            })
            .catch(err => console.log(err));
    }

    const handleDelete = (_id) => {

        productsServices
            .deleteProduct(_id)
            .then(() => {
                loadProducts()
                productsUserLogged()
                console.log("producto eliminado")
            })
            .catch((err) => console.log(err));
    };

    return (
        <>


            <Row className='mt-5'>
                <Col sm={2}>
                    <img className='product-image' src={product.image} alt={product.name} />
                </Col>
                <Col sm={7}>
                    <ListGroup>
                        <Col>
                            <h2 className='protein-name '>{product.name}</h2>
                            <ListGroup.Item className='d-flex product-details' style={{ border: 'none' }} >
                                <h5><strong>Brand:</strong> {product.brand}</h5>
                            </ListGroup.Item>
                        </Col>

                        <Col>
                            {

                                !userData
                                    ?
                                    <p>loading......</p>
                                    :

                                    (


                                        userData.products.includes(product._id)
                                            ?
                                            <Button variant="info" disabled>Already on my list!</Button>
                                            :

                                            <Button variant="warning" onClick={() => handleAddtoMyList(product._id)}>Add to my list</Button>



                                    )}






                            {loggedUser.role === 'ADMIN' && (
                                <>
                                    <Button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete Product</Button>
                                </>
                            )}

                        </Col>
                    </ListGroup>

                    <hr />
                </Col>
            </Row >
        </>

    );
}

export default ProductNuticionalCard




