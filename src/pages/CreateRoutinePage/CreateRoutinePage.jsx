import { Container } from "react-bootstrap"
import CreateRoutineForm from "../../components/CreateRoutineForm/CreateRoutineForm"

const CreateRoutinePage = () => {

    return (
        <div className="CreateRoutine d-flex justify-content-center">
            <Container className="mt-2">
                <h1>Create Routine</h1>
                <CreateRoutineForm />
            </Container >
        </div >
    )

}

export default CreateRoutinePage