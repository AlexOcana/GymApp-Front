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
        console.log("este es el id del producto a añadir", id)
        return this.api.put(`/sendProduct/${id}`)
    }


    removeProduct(id) {
        console.log("controlador id de producto para quitar de la lista de usuario", id)
        return this.api.put(`/removeProduct/${id}`)
    }


    deleteProduct(id) {
        return this.api.delete(`/deleteProduct/${id}`)
    }

}

const productsServices = new ProductsServices()

export default productsServices

