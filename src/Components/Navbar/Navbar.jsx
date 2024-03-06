import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { openModal } from '../../slices/modalSlice';
import { useDispatch } from 'react-redux';


function MyNavbar() {
    const dispatch = useDispatch() 
    return (
        <>
            {["lg"].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#"><Logo /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/service">Service</Nav.Link>
                                    <Nav.Link href="/feature">Feature</Nav.Link>
                                    <Nav.Link href="/product">Product</Nav.Link>
                                    <Nav.Link href="/testimonial">Testimonial</Nav.Link>
                                    <Nav.Link href="/faq">FAQ</Nav.Link>
                                </Nav>
                                <Button onClick={()=> dispatch(openModal())} width="91px" height="40px" text="Sign up" />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default MyNavbar;
