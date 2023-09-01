import { Container } from "react-bootstrap"
import CreateRoutineForm from "../../components/CreateRoutineForm/CreateRoutineForm"

const CreateRoutinePage = () => {

    return (
        <div className="CreateRoutine d-flex justify-content-center">
            <Container>
                <h1>CREAR RUTINA</h1>
                <CreateRoutineForm />
            </Container >
        </div >
    )

}

export default CreateRoutinePage