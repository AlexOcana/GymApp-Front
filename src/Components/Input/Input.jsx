import { Form } from "react-bootstrap"

const Input = ({ label, type, name, onChange }) => {
    return (

        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control value={value} type={type} name={name} onChange={onChange} />
        </Form.Group>


    )
}

export default Input