import { useState } from "react"
import { Form, Container, Button, Row, Col } from "react-bootstrap"

const CreateRoutine = () => {

    const [routineData, setRoutineData] = useState({
        title: '',
        description: '',
    })

    const [inputList, setInputList] = useState([{
        muscle: '',
        exercise: '',
        reps: 4
    }])


    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setRoutineData({ ...routineData, [name]: value })
    }


    const handleExerciseInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value

        setInputList(list)
    }

    const handleRemoveClick = index => {
        const list = [...inputList]
        list.splice(index, 1)

        setInputList(list)
    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            muscle: '',
            exercise: '',
            reps: 0
        }])
    }

    const handleRoutineSubmit = e => {
        e.preventDefault()
    }

    return (

        <div className="CreateRoutine d-flex justify-content-center">
            <Container>
                <Form onSubmit={handleRoutineSubmit}>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={routineData.title} type="text" name="title" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={routineData.description} type="text" name="description" onChange={handleInputChange} />
                    </Form.Group>

                    {
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
                                                <Form.Control value={x.exercise} type="text" name="exercise" onChange={e => handleExerciseInputChange(e, i)} />
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
                                        {inputList.length - 1 === i && <Button variant="danger" onClick={() => handleAddClick(i)}>Add</Button>}
                                    </div>

                                </div>

                            )
                        })
                    }

                    <div className="d-grid mt-3">
                        <Button variant="dark" type="submit">Create New Routine</Button>
                    </div>

                </Form>
            </Container>
        </div>
    )
}

export default CreateRoutine