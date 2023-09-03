import axios from "axios";

class ExerciseService {
    constructor() {
        this.options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': 'd4933db27fmshe2a635668f4aae5p150b73jsnaf2f8586368d',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }

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
