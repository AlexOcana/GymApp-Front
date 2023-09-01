import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from "../../components/LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';
import { AuthContext } from '../../contexts/auth.context';

const Navigation = () => {

    const [modalData, setModalData] = useState({
        show: false,
        content: undefined
    })

    const { logout } = useContext(AuthContext)


    const handleLoginModalShow = () => {
        setModalData({ show: true, content: 'login' })
    };

    const handleSignupModalShow = () => {
        setModalData({ show: true, content: 'signup' })
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
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
                            <Link to={'#'} className='nav-link' onClick={handleLoginModalShow}>Login</Link>
                            <Link to={'#'} className='nav-link' onClick={handleSignupModalShow}>Signup</Link>
                            <Link to={'/myprofile'} className='nav-link'>My Profile</Link>
                            <Link to={'/'} className='nav-link' onClick={logout}>Log Out</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={modalData.show} onHide={() => setModalData({ ...modalData, show: false })}>
                <Modal.Body>
                    {
                        modalData.content === 'login' && <Login handleClose={() => setModalData({ ...modalData, show: false })} />
                    }
                    {
                        modalData.content === 'signup' && <SignUpForm handleClose={() => setModalData({ ...modalData, show: false })} />
                    }
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default Navigation;