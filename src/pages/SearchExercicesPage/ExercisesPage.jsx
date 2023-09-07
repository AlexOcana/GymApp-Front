import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Searchbar/Searchbar";
import ListGroup from 'react-bootstrap/ListGroup';
import exerciseService from '../../services/exercise.services'

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchTerm && exerciseService.getExercise(searchTerm, setExerciseData, console.error);
    }, [searchTerm]);


    const filteredExercises = exerciseData.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

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