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

    getRoutinesByType(routineType) {
        return this.api.get(`/getRoutinesByType/${routineType}`)
    }

    getOneRoutine(routine_id) {
        return this.api.get(`/getOneRoutine/${routine_id}`)
    }

    getRoutinesByOwner(user_id) {
        return this.api.get(`/getRoutinesByOwner/${user_id}`)
    }

    getRoutineExercises(routine_id) {
        return this.api.get(`/getRoutineExercises/${routine_id}`)

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