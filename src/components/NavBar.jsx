import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
   <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
         <Navbar.Brand as={NavLink} to="/">Tienda Online de Golosinas</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link as={NavLink} to="/category/Golosinas">Golosinas</Nav.Link>
               <Nav.Link as={NavLink} to="/category/Chocolates">Chocolates</Nav.Link>
            </Nav>
         </Navbar.Collapse>
         <CartWidget />
      </Container>
   </Navbar>
)