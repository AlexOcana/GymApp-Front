import axios from "axios"

class RoutineService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/routines`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllRoutines() {
        return this.api.get('/getAllRoutines')
    }

    getOneRoutine(routine_id) {
        return this.api.get(`/getOneRoutine/${routine_id}`)
    }

    getRoutinesByOwner(user_id) {
        console.log("llega el id del user al servicio", user_id)
        return this.api.get(`/getRoutinesByOwner/${user_id}`)
    }

    saveRoutine(routineData) {
        return this.api.post('/createRoutine', routineData)
    }

    deleteRoutine(routine_id) {
        return this.api.post(`/deleteRoutine/${routine_id}`)
    }

}

const routinesService = new RoutineService()

export default routinesService