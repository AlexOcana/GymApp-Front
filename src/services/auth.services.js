import axios from 'axios'


class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })

    }

    signup(userData) {
        return this.api.post('/auth/signUp', userData)
    }

    login(userData) {
        return this.api.post('/auth/login', userData)
    }

    editProfile(_id) {
        return this.api.post(`/myProfile/${_id}/edit`)
    }

    verify(authToken) {
        return this.api.get('/auth/verify', { headers: { Authorization: `Bearer ${authToken}` } })
    }

}

const authService = new AuthService()

export default authService