import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'





const Navigbar = () => {
    return (
        <>
            <Navbar bg="dark" expand={false} style={{overflow : "hidden",position : "fixed", top : "0" , width : "100%",}}>
                <Container fluid  >
                    <Navbar.Brand  style ={{color:"white"}} >Neel Popat | Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="bg-dark"   
                    >
                        <Offcanvas.Header  closeButton>
                            <Offcanvas.Title  id="offcanvasNavbarLabel" style ={{color:"white"}}></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end  flex-grow-1 pe-3 py-3"  style ={{color:"white"}} >
                            <ul>

                                <li><Nav.Link href="#intro" style ={{color:"white"}} ><h4>About</h4></Nav.Link></li>
                                <li><Nav.Link href="#education" style ={{color:"white"}} ><h4>Education</h4></Nav.Link></li>
                                <li><Nav.Link href="#project" style ={{color:"white"}}><h4>Project</h4></Nav.Link></li>
                                <li><Nav.Link href="#work" style ={{color:"white"}} ><h4>Work</h4></Nav.Link></li>
                                <li><Nav.Link href="#extraactivity" style ={{color:"white"}}><h4>Co-curricular</h4></Nav.Link></li>
                                <li><Nav.Link href="#tools" style ={{color:"white"}}><h4>Skills</h4></Nav.Link></li>
                            </ul>   
                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <br/>
        </>
    )
}

export default Navigbar
