import axios from "axios"

class RoutineService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/routines`
        })
    }

    getAllRoutines() {
        return this.api.get('/getAllRoutines')
    }

    getOneRoutine(routine_id) {
        return this.api.get(`/getOneRoutine/${routine_id}`)
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