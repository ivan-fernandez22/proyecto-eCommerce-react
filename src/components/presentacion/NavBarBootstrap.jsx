import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../contenedores/CartWidget';

function BasicExample() {
    return (
        <Navbar expand="md" className="navBg">
            <Container>
                <Navbar.Brand as={Link} to="/">Vintage del sur</Navbar.Brand>
                <CartWidget />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/productos/remeras">Remeras</Nav.Link>
                        <Nav.Link as={Link} to="/productos/buzos">Buzos</Nav.Link>
                        <Nav.Link as={Link} to="/productos/pantalones">Pantalones</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;