import { useContext, useEffect, useState } from "react"
import userServices from "../../services/users.services"
import { Col, Card, ListGroup, Row, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './CommunityPage.css'
import { AuthContext } from "../../contexts/auth.context"


const CommunityPage = () => {

    const [users, setUsers] = useState([])
    const [gymBros, setGymBros] = useState([])
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadUsers()

    }, [loggedUser])

    const loadUsers = () => {
        userServices
            .getAllUsers()
            .then(({ data }) => {
                setUsers(data)
                ocaña()
            })


            .catch(err => console.log(err))


    }

    const handlerAddGymBro = (userId) => {
        userServices
            .addGymbro(userId)
            .then(({ data }) => console.log("amigo añadido con exito!!"))
            .catch(err => console.log(err))

    }

    const ocaña = () => {
        userServices
            .getUserInfo('gymbro', loggedUser._id).then(({ data }) => console.log(data)).catch()

    }

    return (
        <Container className="mt-3">
            {!users ? (
                <p>Loading...</p>
            ) :

                (

                    users.map((user) => {
                        return (
                            <Row key={user._id} className="mt-4 mb-3 user-details">
                                <Col md={4}>
                                    <Card.Img className="avatar-img" src={user.avatar} />
                                </Col>
                                <Col md={8}>
                                    <Card key={user._id} className="justify-content-between">
                                        <Card.Body>
                                            <Card.Title className="text-center">
                                                {user.firstname} {user.lastname} ({user.role})
                                            </Card.Title>
                                            <ListGroup className="list-group-flush text-center">
                                                <ListGroup.Item>Favourite Routine: {user.routine}</ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        <ListGroup.Item>RM Chest: {user.chest} Kg</ListGroup.Item>
                                                    </Col>
                                                    <Col>
                                                        <ListGroup.Item>RM Squat: {user.squad} Kg</ListGroup.Item>
                                                    </Col>
                                                </Row>
                                            </ListGroup>
                                        </Card.Body>
                                        <Card.Body className="d-flex justify-content-center  ">
                                            <Link to={`/profile/${user._id}`} className="btn btn-primary buttons-edit">
                                                See Profile
                                            </Link>

                                            {user._id !== loggedUser._id &&

                                                <Button className="btn btn-secondary" onClick={() => handlerAddGymBro(user._id)}>Add to gymbro</Button>

                                            }




                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        );
                    }

                    )
                )
            }
        </Container>
    )
}
export default CommunityPage

// import { useContext, useEffect, useState } from "react"
// import userServices from "../../services/users.services"
// import { Col, Card, ListGroup, Row, Container, Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
// import { AuthContext } from "../../contexts/auth.context"

// const CommunityPage = () => {
//     const [users, setUsers] = useState([]);
//     const [gymbros, setGymBros] = useState([])


//     const { loggedUser } = useContext(AuthContext);

//     useEffect(() => {
//         loadUsers();
//         loggedUser && loadGymbros()
//     }, [loggedUser]);

//     const loadUsers = () => {
//         userServices
//             .getAllUsers()
//             .then(({ data }) => {
//                 setUsers(data)
//             })
//             .catch(err => console.log(err));
//     }

//     const loadGymbros = () => {

//         userServices.getOneUser(loggedUser._id).then(({ data }) => {
//             setGymBros([...data.gymbro])
//         }).catch(err => console.log(err))

//     }

//     const handlerAddGymBro = (userId) => {
//         userServices
//             .addGymbro(userId)
//             .then(({ data }) => {
//                 console.log("amigo añadido con éxito!!");
//                 setAddedFriends({ ...addedFriends, [userId]: true });
//             })
//             .catch(err => console.log(err));
//     }

//     const handlerDeleteGymBro = (userId) => {
//         userServices
//             .deleteGymbro(userId)
//             .then(() => {
//                 console.log("amigo eliminado con éxito !!");
//                 const newAddedFriends = { ...addedFriends };
//                 delete newAddedFriends[userId];
//                 setAddedFriends(newAddedFriends);
//             })
//             .catch(err => console.log(err));
//     }



//     return (
//         <Container className="mt-3">
//             {!users ? (
//                 <p>Loading...</p>
//             ) : (
//                 users.map((user) => {
//                     return (
//                         <Row key={user._id} className="mt-4 mb-3 user-details">
//                             <Col md={4}>
//                                 <Card.Img className="avatar-img" src={user.avatar} />
//                             </Col>
//                             <Col md={8}>
//                                 <Card key={user._id} className="justify-content-between">
//                                     <Card.Body>
//                                         <Card.Title className="text-center">
//                                             {user.firstname} {user.lastname} ({user.role})
//                                         </Card.Title>
//                                         <ListGroup className="list-group-flush text-center">
//                                             <ListGroup.Item>Favourite Routine: {user.routine}</ListGroup.Item>
//                                             <Row>
//                                                 <Col>
//                                                     <ListGroup.Item>RM Chest: {user.chest} Kg</ListGroup.Item>
//                                                 </Col>
//                                                 <Col>
//                                                     <ListGroup.Item>RM Squat: {user.squad} Kg</ListGroup.Item>
//                                                 </Col>
//                                             </Row>
//                                         </ListGroup>
//                                     </Card.Body>
//                                     <Card.Body className="d-flex justify-content-center">
//                                         <Link to={`/profile/${user._id}`} className="btn btn-primary buttons-edit">
//                                             See Profile
//                                         </Link>
//                                         {user._id !== loggedUser._id && (
//                                             gymbros && gymbros.includes(user._id) ? (
//                                                 <Button className="btn btn-danger" onClick={() => handlerDeleteGymBro(user._id)}>
//                                                     Delete gymbro
//                                                 </Button>
//                                             ) : (
//                                                 <Button className="btn btn-secondary" onClick={() => handlerAddGymBro(user._id)}>
//                                                     Add to gymbro
//                                                 </Button>
//                                             ))}

//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     );
//                 })
//             )}
//         </Container>
//     )
// }

// export default CommunityPage