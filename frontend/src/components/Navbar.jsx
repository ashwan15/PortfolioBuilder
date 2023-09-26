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
//import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FormExample() {
  return (
    <Navbar bg="primary" className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}

export default FormExample
//export default BasicExample
