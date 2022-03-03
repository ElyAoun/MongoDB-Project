import React from 'react';
import {Navbar, Container, Button} from 'react-bootstrap'

const Header = () => {

  return ( 
    <Navbar bg="dark" expand="lg" variant="dark" sticky='top' style={{ height: '4rem'}} >
    <Container fluid className="h-25">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button href="/register" variant="outline-light" style={{marginRight:'1rem'}}>Add User</Button>
          <Button href="/makeTransaction" variant="outline-success">Make Transaction</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
  
};

export default Header;