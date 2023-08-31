import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from "../../components_/LoginForm/LoginForm";
import Signup from '../../pages/Signup_page/Signup';

const Navigation = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLoginModalShow = () => {
        setShowLoginModal(true);
    };

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className='nav-link' to={'/'}>App Name</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/'} className='nav-link'>Home</Link>
                            <Link to={'/exercises'} className='nav-link'>Exercises</Link>
                            <Link to={'/routines'} className='nav-link'>Routines</Link>
                            <Link to={'/newroutine'} className='nav-link'>Create Routine</Link>
                            <Link to={'/aboutus'} className='nav-link'>About Us</Link>
                            <Link to={'/signUp'} className='nav-link'>SignUp</Link>
                            <Link to={'#'} className='nav-link' onClick={handleLoginModalShow}>Login</Link>
                            <Link to={'/myprofile'} className='nav-link'>My Profile</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showLoginModal} onHide={handleLoginModalClose}>
                <Modal.Body>
                    <Login />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Navigation;
