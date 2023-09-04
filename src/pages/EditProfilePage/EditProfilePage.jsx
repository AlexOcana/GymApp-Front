import { useEffect } from "react";
import { useParams } from "react-router-dom";
import userServices from "../../services/users.services";

const editProfile = () => {

    const { id } = useParams()

    const [user, setUser] = useState(null)

    useEffect(() => {
        EditOneUser()
    }, [])

    const EditOneUser = () => {
        userServices
            .editUser(id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
                </Form.Group>
                <div className="d-grid">
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading Image...' : 'Register'}</Button>
                </div>
            </Form>
        </>
    );
}

export default editProfile



