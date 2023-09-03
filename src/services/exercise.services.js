import axios from "axios"

class ExerciseService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/exercises`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getExercise(exercise) {
        return this.api.get(`/${exercise}`)
    }
}


const exercisesService = new ExerciseService()

export default exercisesService