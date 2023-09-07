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
                                <Col className="d-flex justify-content-center" key={_id} lg={12} md={6}>
                                    <Card className="mb-5" bg={'dark'} text={'light'}>
                                        <Card.Header>{title}</Card.Header>
                                        <img style={{ width: 150 }} src={owner.avatar} alt="" />
                                        <Card.Body>
                                            <Card.Title>{training}</Card.Title>
                                            <Card.Text>By: {owner.firstname}</Card.Text>
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