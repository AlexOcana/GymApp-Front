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

    verify(authToken) {
        return this.api.get('/verify',
            { headers: { Authorization: `Bearer ${authToken}` } }
        )
    }

}

const authService = new AuthService()

export default authService