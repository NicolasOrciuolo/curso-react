import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
   <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
         <Navbar.Brand href="/">Tienda Online de Golosinas</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link href="/category/Golosinas">Golosinas</Nav.Link>
               <Nav.Link href="/category/Chocolates">Chocolates</Nav.Link>
            </Nav>
         </Navbar.Collapse>
         <CartWidget />
      </Container>
   </Navbar>

)