import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function NavbarComp() {
    const linkStyles = {
        textDecoration: 'none',
        marginLeft: '30px',
        color: "#fff",
        fontSize: "20px"
    }
    const logoStyles = {
        fontSize: "25px",
        fontWeight: "bold",
        color: '#fff'
    }
  return (
    <Navbar bg="dark" expand="lg" style={{boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', top: 0, position:'sticky'}}>
      <Container>
        <Navbar.Brand href="#home" style={logoStyles}><b>FUDATU</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link style={linkStyles} to="/register">Register</Link>
            <Link style={linkStyles} to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;