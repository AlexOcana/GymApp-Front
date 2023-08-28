import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../Searchbar/Searchbar";
import ListGroup from 'react-bootstrap/ListGroup';

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/',
            headers: {
                'X-RapidAPI-Key': 'a82e159e14msh060e0125dd08c56p1b8b49jsn7efda9f3b03f',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        if (searchTerm) {
            axios.request(options)
                .then(response => {
                    setExerciseData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {

            setExerciseData([]);
        }
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
                <ListGroup.Item>
                    {filteredExercises.length > 0 && (
                        filteredExercises.map(exercise => (
                            <p key={exercise.id}>{exercise.name}</p>
                        ))
                    )}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Exercises;
