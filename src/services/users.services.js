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

    getOneUser() {
        return this.api.get('/getOneUser/:id')
    }

    editUser(userData) {
        return this.api.post(`/editUser/:id/edit`, userData)
    }

    deleteUser() {
        return this.api.post('/deleteUser/:id')
    }

}

const userServices = new UserServices()

export default userServices

