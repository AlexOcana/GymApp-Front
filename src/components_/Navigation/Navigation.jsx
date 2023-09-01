import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from "../../components_/LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';
import { AuthContext } from '../../contexts/auth.context';

const Navigation = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const { logout } = useContext(AuthContext)

    const handleLoginModalShow = () => {
        setShowLoginModal(true);

    };
    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };
    const handleSignupModalShow = () => {
        setShowSignupModal(true);
    };
    const handleSignupModalClose = () => {
        setShowSignupModal(false);
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
                            <Link to={'#'} className='nav-link' onClick={handleLoginModalShow}>Login</Link>
                            <Link to={'#'} className='nav-link' onClick={handleSignupModalShow}>Signup</Link>
                            <Link to={'/myprofile'} className='nav-link'>My Profile</Link>
                            <Link to={'/'} className='nav-link' onClick={logout}>Log Out</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={showLoginModal} onHide={handleLoginModalClose}>
                <Modal.Body>
                    <Login handleClose={handleLoginModalClose} />
                </Modal.Body>
            </Modal>

            <Modal show={showSignupModal} onHide={handleSignupModalClose}>
                <Modal.Body>
                    <SignUpForm handleClose={handleSignupModalClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default Navigation;