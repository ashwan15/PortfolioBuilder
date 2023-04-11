import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import src from '../assests/headerbg.jpg'
const containerStyle = {
  height: 350,
}
const textStyle = {
  height: 50,
}

function ImgOverlayExample() {
  return (
    <>
      <Container>
        <Card style={containerStyle} className="bg-dark text-white">
          <Card.Img style={containerStyle} src={src} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title style={textStyle}>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  )
}

export default ImgOverlayExample
