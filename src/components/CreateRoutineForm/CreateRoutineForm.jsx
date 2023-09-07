import { useContext, useEffect, useState } from "react"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import * as Constants from './../../consts/routine.consts'
import routinesService from "../../services/routines.services"
import exercisesService from "../../services/exercise.services"
import { AuthContext } from "../../contexts/auth.context"

const CreateRoutineForm = () => {
    const { loggedUser } = useContext(AuthContext)
    const [exercises, setExercises] = useState([])
    const [inputList, setInputList] = useState(new Map())
    const [muscleGroup, setMuscleGroup] = useState(null)
    const [routineData, setRoutineData] = useState({
        title: '',
        description: '',
        training: Constants.ROUTINE_TYPES[0],
        owner: loggedUser._id
    })

    useEffect(() => {
        muscleGroup && loadExercises()
    }, [muscleGroup])

    const loadExercises = () => {
        exercisesService
            .getExerciseByMuscle(muscleGroup)
            .then(({ data }) => setExercises(data))
            .catch(err => console.log(err))
    }

    let routine = {
        title: routineData.title,
        description: routineData.description,
        training: routineData.training,
        owner: routineData.owner,
        exercises: Object.fromEntries(inputList.entries())
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRoutineData({ ...routineData, [name]: value })
    }

    const handleMuscleChange = e => {
        setMuscleGroup(e.currentTarget.value)
    }

    const handleExerciseInputChange = (id, e) => {
        const { name, value } = e.currentTarget
        const updatedProperties = inputList
        inputList.set(id, { id, [name]: value })

        setInputList(updatedProperties)
    }

    const handleRoutineSubmit = e => {
        e.preventDefault()

        routinesService
            .saveRoutine(routine)
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
                            Constants.TARGET_MUSCLES.map(elm => <option key={elm} value={elm}>{elm.charAt(0).toUpperCase() + elm.slice(1)}</option>)
                        }
                    </Form.Select>
                </Form.Group>



                <div className="d-grid mt-3">
                    <Button variant="dark" type="submit">Create New Routine</Button>
                </div>

                <Row>

                    {
                        exercises &&

                        exercises.map(elm => {
                            return (
                                <Col className="mb-4 mt-4" xs={12} md={6} lg={3} key={elm.id}>
                                    <Card style={{ height: '500px' }}>
                                        <Card.Img variant="top" src={elm.gifUrl} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Form.Group>
                                                <Form.Label>Reps:</Form.Label>
                                                <Form.Control value={inputList.id} type="number" name="reps" onChange={e => handleExerciseInputChange(elm.id, e)} />
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )

                        })
                    }
                </Row>
            </Form>

        </>

    )
}

export default CreateRoutineForm