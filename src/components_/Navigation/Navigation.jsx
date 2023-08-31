import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className='nav-link' to={'/'}>{import.meta.env.VITE_APP_NAME}</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Home</Link>
                        <Link to={'/exercises'} className='nav-link'>Exercises</Link>
                        <Link to={'/routines'} className='nav-link'>Routines</Link>
                        <Link to={'/newroutine'} className='nav-link'>Create Routine</Link>
                        <Link to={'/aboutus'} className='nav-link'>About Us</Link>
                        <Link to={'/signUp'} className=' nav-link'>SignUp</Link>
                        <Link to={'/Login'} className='nav-link'>Log In</Link>
                        <Link to={'/myprofile'} className='nav-link'>My Profile</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation