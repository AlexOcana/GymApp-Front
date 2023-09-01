import axios from "axios";

class ExerciseService {
    constructor() {
        this.options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': '3f82b74a4bmshf93f02834abe6d0p19e87ejsn6d9218f99099',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    searchExercises(searchTerm, setExerciseData, setError) {
        if (searchTerm) {
            axios.request(this.options)
                .then(response => {
                    setExerciseData(response.data);
                })
                .catch(error => {
                    setError(error);
                });
        } else {
            setExerciseData([]);
        }
    }
}

export default ExerciseService;
