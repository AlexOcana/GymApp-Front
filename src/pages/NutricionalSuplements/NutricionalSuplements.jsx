
import { Col, Container, ListGroup } from 'react-bootstrap'
import { Row, Button } from 'react-bootstrap'
import './NutricionalSuplements.css'
import productsServices from '../../services/products.services'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import userServices from '../../services/users.services'
import ProductNuticionalCard from '../../components/ProductNuticionalCard/ProductNuticionalCard'



const NutricionalSuplements = () => {

    const [product, setProduct] = useState([])

    const [userData, setUserData] = useState()

    const [deleteProduct, setDeleteProduct] = useState(false)

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadProducts()
        productsUserLogged()
    }, [])


    const loadProducts = () => {

        productsServices
            .getAllProducts()
            .then(({ data }) => setProduct(data))
            .catch(err => console.log(err))
    }


    const productsUserLogged = () => {

        userServices
            .getOneUser(loggedUser?._id)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err));

    }

    return (


        <Container className='container-products'>

            <h2>Nutritional products</h2>

            {
                !product && !userData
                    ?
                    <p>cargando productos......</p>
                    :

                    product.map((product => {

                        return (
                            <ProductNuticionalCard key={product._id} product={product} userData={userData} loadProducts={loadProducts} productsUserLogged={productsUserLogged} />
                        )
                    }))
            }
            {/* <h2>Nutritional Products</h2>
            <hr />

            {!product ?

                <h1>lOADING.....</h1>

                :
                product.map((elm, idx) => {
                    <ProductNuticionalCard product={...elm} />
                }

                )

            } */}
        </Container >
    );
}

export default NutricionalSuplements




