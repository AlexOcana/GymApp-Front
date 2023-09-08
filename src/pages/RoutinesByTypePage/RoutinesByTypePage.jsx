import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"
import routinesService from "../../services/routines.services"

const RoutinesByTypePage = () => {
    const { routineType } = useParams()
    const [routines, setRoutines] = useState([])

    console.log(routineType)

    useEffect(() => {
        loadRoutines()
    }, [])


    const loadRoutines = () => {
        routinesService
            .getRoutinesByType(routineType)
            .then(({ data }) => setRoutines(data))
            .catch(err => console.log(err))
    }

    return (


        <div className="RoutinesListPage">
            <Container className="mt-3">
                <Row>
                    {
                        routines ? routines.map(({ title, training, owner, _id, }) => {
                            return (
                                <Col className="d-flex justify-content-center" key={_id} lg={6} md={6}>
                                    <Card>
                                        <Card className="" bg={'dark'} text={'light'}></Card>
                                        <Card.Header style={{ fontSize: '1.3em', fontWeight: 'bold' }}>{title}</Card.Header>
                                        <Card.Img style={{}} variant="top" src={owner.avatar} />
                                        <Card.Body>
                                            <Card.Title>Type Traning: {training}</Card.Title>
                                            <Card.Title>By: {owner.firstname}</Card.Title>
                                            <div className="d-grid">
                                                <Link to={`/routine/${_id}`} className='btn btn-warning'>Routine Details </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>



                            )
                        }) : <Spinner animation="border" variant="dark" />

                    }


                </Row>
            </Container>


        </div >
    )
}

export default RoutinesByTypePage