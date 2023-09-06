import axios from 'axios'


class ProductsServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/products`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })


    }

    getAllProducts() {
        return this.api.get('/products')
    }

    getOneProduct(id) {
        return this.api.get(`/getOneProduct/${id}`)
    }


    sendProduct(id) {
        return this.api.put(`/sendProduct/${id}`)
    }


    editOneProduct(id, productData) {
        return this.api.post(`/editOneProduct/${id}`, { productData })
    }

    deleteProduct(id) {
        return this.api.delete(`/deleteProduct/${id}`)
    }

}

const productsServices = new ProductsServices()

export default productsServices

