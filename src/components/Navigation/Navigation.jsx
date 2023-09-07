import React, { useContext, useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from "../../components/LoginForm/LoginForm";
import SignUpForm from '../SignUpForm/SignUpForm';
import { AuthContext } from '../../contexts/auth.context';
import "./Navigation.css"

const Navigation = () => {

    const [modalData, setModalData] = useState({
        show: false,
        content: undefined
    })

    const { loggedUser, logout } = useContext(AuthContext)

    const handleLoginModalShow = () => {
        setModalData({ show: true, content: 'login' })
    };

    const handleSignupModalShow = () => {
        setModalData({ show: true, content: 'signup' })
    };

    return (
        <div className='NavBar'>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                    <Link className='nav-link' to={'/'} style={{ marginLeft: '20px' }}>{import.meta.env.VITE_APP_NAME}</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">



                        <Link to={'/exercises'} className='nav-link'>Exercises</Link>

                        {loggedUser && (
                            <>
                                <Link to={'/exercises'} className='nav-link'>Search Your Exercices</Link>
                                <Link to={'/nutrition'} className='nav-link'>Nutrition</Link>
                                <Link to={'/routines'} className='nav-link'>Routines By Type</Link>
                                <Link to={'/routines-list'} className='nav-link'>All Routines</Link>
                                <Link to={'/newroutine'} className='nav-link'>Create Routine</Link>
                                <Link to={'/community'} className='nav-link'>Community</Link>
                            </>

                        )}


                        {!loggedUser && (
                            <>
                                <Link to={'/'} className='nav-link'>Home</Link>,
                                <Link to={'/exercises'} className='nav-link'>Search Your Exercices</Link>
                                <Link to={'#'} className='nav-link' onClick={handleLoginModalShow}>Login</Link>
                                <Link to={'#'} className='nav-link' onClick={handleSignupModalShow}>Signup</Link>
                            </>

                        )}


                    </Nav>

                    <div className="d-flex profile-user" style={{ marginRight: '50px' }}>
                        <span style={{ marginRight: '20px', color: 'white' }} className='navbar-text'>{loggedUser ? loggedUser.firstname && loggedUser.lastname : 'Not Logged'}</span>

                        {loggedUser &&
                            <>
                                <Link to={'/'} className='nav-link' style={{ marginTop: '8px', color: 'yellow' }} onClick={logout}>Log Out</Link>
                                <Link to={`/profile/${loggedUser._id}`} className="nav-link image-zoom">
                                    <img src={loggedUser?.avatar} alt="Avatar" className="rounded-circle" /></Link>
                            </>
                        }

                    </div>

                </Navbar.Collapse>
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