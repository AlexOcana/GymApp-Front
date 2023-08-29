import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <Navbar bg="dark" data-bs-theme="dark" className='mb-5' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className='nav-link' to={'/'}>GymApp</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Home</Link>
                        <Link to={'/aboutus'} className='nav-link'>About Us</Link>
                        <Link to={'/exercises'} className='nav-link'>Exercises</Link>
                        <Link to={'/routines'} className='nav-link'>Routines</Link>
                        <Link to={'/newroutine'} className='nav-link'>Create Routine</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation