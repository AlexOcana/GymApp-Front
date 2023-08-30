import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> bfa216676aa77f35c7cc4d1343e7fe469fe9a8b6
import SearchBar from "../../components_/Searchbar/Searchbar";
import ListGroup from 'react-bootstrap/ListGroup';
import ExerciseService from '../../services/exercise.services'

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const exerciseService = new ExerciseService();

    useEffect(() => {
        exerciseService.searchExercises(searchTerm, setExerciseData, console.error);
    }, [searchTerm]);

    // TODO: REVISAR SI LA API NO DISPONE DE ENDPOINTS PARA LOCALIZAR EJERCICIOS POR QUERY

    const filteredExercises = exerciseData.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // TODO: PRESTAR ATENCIÓN EN LA INTEGRACIÓN DEL UI FRAMEWORK
        <div>
            <SearchBar
                keyword={searchTerm}
                onChange={(value) => setSearchTerm(value)}
            />
            <ListGroup>
                {filteredExercises.map(exercise => (
                    <ListGroup.Item key={exercise.id}>
                        <p>{exercise.name}</p>
                        <img src={exercise.gifUrl} alt={exercise.name} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Exercises;
