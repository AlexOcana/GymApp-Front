import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import * as Constants from './../../consts/routine.consts'
import routinesService from "../../services/routines.services"
import exercisesService from "../../services/exercise.services"

const CreateRoutineForm = () => {

    const [exercises, setExercises] = useState()

    const [muscleGroup, setMuscleGroup] = useState(null)

    useEffect(() => {
        muscleGroup && loadExercises()
    }, [muscleGroup])


    const loadExercises = () => {
        exercisesService
            .getExerciseByMuscle(muscleGroup)
            .then(({ data }) => setExercises(data))
            .catch(err => console.log(err))
    }

    const [routineData, setRoutineData] = useState({
        title: '',
        description: '',
        type: '',
        owner: ''
    })


    const [inputList, setInputList] = useState({})

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRoutineData({ ...routineData, [name]: value })
    }

    const handleMuscleChange = e => {
        setMuscleGroup(e.currentTarget.value)
    }

    const handleExerciseInputChange = (id, e) => {
        const { name, value } = e.currentTarget
        const updatedList = { [name]: value }
        inputList[id] = updatedList

        setInputList({ ...inputList })
    }

    const handleRemoveClick = (id, e) => {

    }

    const handleAddClick = (id, e) => {
        setInputList([...inputList, {
            exerciseId: id,
            reps: e.currentTarget.value
        }])
    }

    const handleRoutineSubmit = e => {
        e.preventDefault()

        routinesService
            .saveRoutine({ routineData, inputList })
            .then(console.log('done'))
            .catch(err => console.log(err))
    }

    return (

        <>
            <Form onSubmit={handleRoutineSubmit}>

                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={routineData.title} type="text" name="title" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as={'textarea'} value={routineData.description} type="text" name="description" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="training" onChange={handleInputChange}>
                        {
                            Constants.ROUTINE_TYPES.map(elm => <option key={elm.name} value={elm.name}>{elm.name}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Muscle Group</Form.Label>
                    <Form.Select name="muscle" onChange={handleMuscleChange}>
                        {
                            Constants.TARGET_MUSCLES.map(elm => <option key={elm} value={elm}>{elm}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <div className="d-grid mt-3">
                    <Button variant="dark" type="submit">Create New Routine</Button>
                </div>

            </Form>

            <Row>

                {
                    exercises ?

                        exercises.map(elm => {
                            return (
                                <Col key={elm.id}>
                                    <Card>
                                        <Card.Img variant="top" src={elm.gifUrl} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Form.Group>
                                                <Form.Label>Reps</Form.Label>
                                                <Form.Control value={inputList.id} type="number" name="reps" onChange={e => handleExerciseInputChange(elm.id, e)} />
                                            </Form.Group>
                                            <Button onClick={e => handleAddClick(elm.id, e)}>Add to Routine</Button>
                                            <Button onClick={e => handleRemoveClick(elm.id, e)}>Remove from Routine</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )

                        }) : <h1>Loading...</h1>
                }
            </Row>
        </>

    )
}

export default CreateRoutineForm