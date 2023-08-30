import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../Searchbar/Searchbar";
import ListGroup from 'react-bootstrap/ListGroup';

function Exercises() {

    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => loadExercises(), [searchTerm])

    const loadExercises = () => {

        // TODO: DESACOPLAR A SERVICIOS

        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/',
            headers: {
                'X-RapidAPI-Key': '3f82b74a4bmshf93f02834abe6d0p19e87ejsn6d9218f99099',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }

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
    }


    // TODO: REVISAR SI LA API NO DISPONE DE ENDPOINTS PARA LOCALIZAR EJERCICIOS POR QUERY

    const filteredExercises = exerciseData.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        // TODO: PRESTAR ATENCIÓN EN LA INTEGRACIÓN DEL UI FRAMEWORK -> https://react-bootstrap.netlify.app/docs/components/list-group#basic-example
        <div>
            <SearchBar
                keyword={searchTerm}
                onChange={(value) => setSearchTerm(value)}
            />
            <ListGroup>

                {/* TODO: DESACOPLAR LISTA */}

                <ListGroup.Item>
                    {filteredExercises.length > 0 && (
                        filteredExercises.map(exercise => (
                            <>
                                <p key={exercise.id}>{exercise.name}</p>
                                <img src={exercise.gifUrl} />
                            </>
                        ))
                    )}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Exercises;
