import React from 'react'
//import Card from 'react-bootstrap/Card'
import {
  Card,
  //CardImg,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Button,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useQuery } from 'react-query'
import axios from 'axios'
export default function Blog() {
  const { isLoading, error, data } = useQuery('aboutproject', () =>
    axios('http://localhost:3001/api/v1/aboutprojects')
  )
  if (error) return <h1>Error:{error.message},try again.</h1>
  if (isLoading) return <h1>Loading..</h1>
  console.log(data)
  /**let aboutProjectArr = data.data.aboutproject.map((project) => {
    return project
  })
  console.log(aboutProjectArr)**/
  return (
    <Container>
      {data.data.project.map((item) => (
        <div key={item._id}>
          <Card
            style={{
              width: '18rem',
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Techstack:{item.Techstack}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item._id}
              </CardSubtitle>
              <CardText>{item.Features}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </Container>
  )
}
