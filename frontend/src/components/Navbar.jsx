import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
//import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Example from './Sidebar'

/**<Navbar bg="dark" expand="lg" variant="dark">
   <Container>
     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-auto"></Nav>
     </Navbar.Collapse>
     <Example />
     <Button className="ml-5" variant="outline-success">
       <Link to="/login">Login</Link>
     </Button>
     <Button variant="outline-success">
       <Link to="/register">Register</Link>
     </Button>
   </Container>
 </Navbar>**/
function BasicExample() {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Button className="" variant="outline-success">
              <Link to="/login">Login</Link>
            </Button>
            <Button className="mx-1" variant="outline-success">
              <Link to="/register">Register</Link>
            </Button>
            <Example />
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default BasicExample
