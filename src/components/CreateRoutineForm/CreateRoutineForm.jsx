import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import * as Constants from './../../consts/routine.consts'
import routinesService from "../../services/routines.services"
import exercisesService from "../../services/exercise.services"

const CreateRoutineForm = () => {

    const [exercises, setExercises] = useState()

    const [muscleGroup, setMuscleGroup] = useState(null)

    const [clicked, setClicked] = useState(false)


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

    /*  const [inputList, setInputList] = useState([{
         exerciseId: '',
         reps: 4
     }]) */

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRoutineData({ ...routineData, [name]: value })
    }

    const handleMuscleChange = e => {
        setMuscleGroup(e.currentTarget.value)
    }


    /* const handleExerciseInputChange = (e, index) => {
        const { name, value } = e.currentTarget
        const list = [...inputList]
        list[index][name] = value
    
        setInputList([...inputList], list)
    }
    
    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)
    
        setInputList(list)
    }
    
    const handleAddClick = () => {
        setInputList([...inputList, {
            exerciseId: '',
            reps: 4
        }])
    } */

    const handleRoutineSubmit = e => {
        e.preventDefault()

        routinesService
            .saveRoutine({ routineData })
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

                {/* TODO II: DESACOPLAR LÓGICAS DE INPUTS */}

                {/* {
                    inputList.map((x, i) => {
                        return (
                            <div key={i}>
                                {inputList[i].reps > 15 && (inputList[i].reps = 15)}
                                {inputList[i].reps < 4 && (inputList[i].reps = 4)}
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Select Muscle Group</Form.Label>
                                            <Form.Select name="muscle" onChange={e => handleExerciseInputChange(e, i)}>
                                                <option value={x.muscle}>Biceps</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Search Exercise</Form.Label>
                                            <Form.Control value={x.exerciseId} type="text" name="exercise" onChange={e => handleExerciseInputChange(e, i)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Reps</Form.Label>
                                            <Form.Control value={x.reps} type="number" name="reps" onChange={e => handleExerciseInputChange(e, i)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="d-grid mt-3">
                                    {inputList.length !== 1 && <Button variant="danger" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                                    {inputList.length - 1 === i && <Button className="mt-3" onClick={() => handleAddClick(i)}>Add</Button>}
                                </div>

                            </div>
                        )
                    })
                } */}

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
                                            <Card.Title>{elm.bodyPart}</Card.Title>
                                            {/* <Button onClick={handleAddClick}>Add to Routine</Button>
                                            <Button onClick={handleRemoveClick}>Remove from Routine</Button> */}
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