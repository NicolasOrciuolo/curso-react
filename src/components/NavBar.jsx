import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from './CartWidget';
import {Routes, Route, Link, NavLink} from "react-router-dom";


const categories = ["Golosinas","Chocolates"]


export const NavBar = () => (
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="#home">Tienda Online de Golosinas</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link href="#home">Golosinas</Nav.Link>
               <Nav.Link href="#link">Chocolates</Nav.Link>
            </Nav>
         </Navbar.Collapse>

         <CartWidget/>
         
      </Container>
   </Navbar>

)