import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Searchbar/Searchbar";
import ListGroup from 'react-bootstrap/ListGroup';
import ExerciseService from '../../services/exercise.services'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap'
import './Exercises.css'

function ExercisesPage() {
    const [exerciseData, setExerciseData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const exerciseService = new ExerciseService();

    useEffect(() => {
        exerciseService.searchExercises(searchTerm, setExerciseData, console.error);
    }, [searchTerm]);


    const filteredExercises = exerciseData.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        // TODO II: INTEGRAR EL FILTRO CONTRA LA API

        <div>
            <h2>Search your exercices to see how to do it !!! </h2>
            <SearchBar className="searchBar"
                keyword={searchTerm}
                onChange={(value) => setSearchTerm(value)}
            />
            <Container>
                <Row>
                    {filteredExercises.map(exercise => (
                        <Col className="mt-3">
                            {/* TODO II: DESACOPLAR EXERCISECARD */}
                            <Card className="exercise-card">
                                <><Card.Img src={exercise.gifUrl} alt={exercise.name} /><Card.Body key={exercise.id}>
                                    <Card.Title className="exercices-text">{exercise.name}</Card.Title>
                                </Card.Body></>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>

        </div >
    );
}

export default ExercisesPage;
