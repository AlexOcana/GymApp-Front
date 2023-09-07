import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Card, Row, Col, Spinner } from "react-bootstrap"
import routinesService from "../../services/routines.services"

const RoutineDetailsPage = () => {
    const { id } = useParams()
    const [routine, setRoutine] = useState()
    const [exercises, setExercises] = useState()

    useEffect(() => {
        loadRoutine()
        loadExercises()
    }, [])

    const loadRoutine = () => {
        routinesService
            .getOneRoutine(id)
            .then(({ data }) => setRoutine(data))
            .catch(err => console.log(err))
    }

    const loadExercises = () => {
        routinesService
            .getRoutineExercises(id)
            .then(({ data }) => setExercises(data))
            .catch(err => console.log(err))
    }
    routine && console.log(routine)
    return (
        <>
            {
                routine &&
                <div className="RoutineDetailsPage">
                    <Container className="mt-3">
                        <Row>
                            <Col>
                                <Card className="mb-5" bg={'dark'} text={'light'}>
                                    <Card.Header>{routine.owner.firstname}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{routine.title}</Card.Title>
                                        <Card.Text>{routine.description}</Card.Text>

                                        <div className="d-grid">
                                            <Link to={`/profile/${routine.owner._id}`} className='btn btn-warning'>Profile Details </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                        <Row>
                            {
                                exercises ? exercises.map(({ bodyPart, equipment, gifUrl, id, name, target }, idx) => {
                                    return (
                                        <Col className="mb-4" xs={12} md={6} lg={3} key={Number(id)}>
                                            <Card style={{ height: '500px' }}>
                                                <Card.Img variant="top" src={gifUrl} />
                                                <Card.Body>
                                                    <Card.Title> {name} </Card.Title>
                                                    <Card.Text>Body Part: {bodyPart} </Card.Text>
                                                    <Card.Text>Equipment Type: {equipment} </Card.Text>
                                                    <Card.Text>Target Musle: {target} </Card.Text>

                                                    <p> <strong>Reps: {routine.exercises[idx].properties.reps}</strong></p>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                }) : <div className="d-flex justify-content-center"><Spinner animation="border" variant="dark" /></div>

                            }
                        </Row>
                    </Container>


                </div >
            } </>
    )

}

export default RoutineDetailsPage