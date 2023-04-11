import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/aboutme">About Me</Nav.Link>

          <Nav.Link href="/projects">Projekts</Nav.Link>

          <Nav.Link href="/aboutproject">About Projekts</Nav.Link>
          <Nav.Link href="/createaboutme">Create About Me</Nav.Link>
          <Nav.Link href="/createproject">Create Project</Nav.Link>
          <Nav.Link href="/deleteproject">Delete Project</Nav.Link>

          <Nav.Link href="/contact">Contact</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Example
