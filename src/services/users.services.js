import axios from 'axios'


class UserServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
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

    addGymbro(userId) {
        return this.api.put("/addGymBro", { userId })
    }

    getUserInfo(filter, user_id) {
        return this.api.get(`/getUserInfo/${filter}/${user_id}`)
    }

    deleteGymbro(userId) {
        return this.api.put("/deleteGymbro", { userId })
    }


    deleteUser(id) {
        return this.api.post(`/deleteUser/${id}`)
    }

}

const userServices = new UserServices()

export default userServices