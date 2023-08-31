import { Container, Row, Col } from "react-bootstrap"
import './aboutus.css'
const AboutUs = () => {
    return (

        <div className="AboutUs">
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <img src="/nerds.jpg" alt="" />
                    </Col>
                    <Col className="Col2">
                        <div>
                            <h1>About Us</h1>
                            <p className="mt-2">¡Hola, futuro maestro jedi del levantamiento de pesas y hechicero de las cintas de correr! En nuestra galaxia del gimnasio,
                                nos tomamos tan en serio el acondicionamiento físico como un hobbit se toma sus segundos desayunos.
                                Somos como ese compañero de aventuras en los videojuegos que siempre tiene un aperitivo saludable
                                en una mano y un control de Wii en la otra.
                            </p>
                            <p>Nuestros superpoderes incluyen contar repeticiones más rápido que una calculadora y realizar
                                estiramientos que harían envidiar a Elastigirl.
                                Aquí, cada día es como un nuevo nivel de juego. Nuestros entrenadores son como guías de mazmorra,
                                excepto que las mazmorras son las áreas de
                                cardio y las recompensas son músculos tonificados. </p>
                            <p>
                                ¡No encontrarás dragones aquí, pero podrías
                                descubrir que tu resistencia es más feroz que un dragón escupe fuego!
                                Nuestro lema es "Levantar, reír, repetir". Si no te ríes al menos una vez
                                durante tu entrenamiento, ¡te devolvemos tus risas garantizadas! Y si eres
                                fanático de los chistes malos mientras haces sentadillas, ¡has encontrado tu tribu!
                                Así que, si estás listo para romper una carcajada junto con tus récords personales,
                                únete a nosotros en esta misión de fitness que haría sonrojar al mismísimo Flash.
                                ¡Prepárate para sudar y reír a partes iguales en nuestra comedia de ejercicios!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default AboutUs