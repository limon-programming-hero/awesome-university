import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarPortion.css'
import {
    // BrowserRouter as Router,
    Link,
    // NavLink
} from "react-router-dom";

function NavbarPortion() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='nav-button' to='/home'><Navbar.Brand>Awesome University</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Router> */}
                        <Link className='me-4 nav-button' to="/home">Home </Link>
                        <Link className='me-4 nav-button' to="/about">About </Link>
                        <Link className='me-4 nav-button' to="/services">Services </Link>
                        <Link className='me-4 nav-button' to="/dashboard">Your Dashboard </Link>
                        {/* </Router> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPortion;