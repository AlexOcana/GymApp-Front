import axios from 'axios'


class UserServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`
        })

    }

    getAllUsers() {
        return this.api.get('/getAllUsers')
    }

    getOneUser(id) {
        return this.api.get(`/getOneUser/${id}`)
    }

    editUser(id, userData) {
        return this.api.post(`/editUser/${id}`, { userData })
    }

    deleteUser(id) {
        return this.api.post(`/deleteUser/${id}`)
    }

}

const userServices = new UserServices()

export default userServices

