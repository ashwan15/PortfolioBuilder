import React from 'react'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
//import Card from 'react-bootstrap/Card'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import {
  Card,
  //CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Button,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  const { isLoading, error, data, refetch } = useQuery('aboutme', () =>
    axios('http://localhost:4000/api/v1/aboutme')
  )

  //this function tells server that we want to perform delete operation
  //this is only the definition of the function
  const deleteProject = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/aboutme/${id}`
    )
    return response.data._id
  }

  //to perform delete operation useMutation hook is used
  const { mutate } = useMutation(deleteProject, {
    onSuccess: () => refetch(),
  })

  const handleDelete = (id) => {
    mutate(id)
  }
  if (error) return <h1>Error:{error.message},try again</h1>
  if (isLoading) return <h1>Loading..</h1>
  let aboutmeArr = data.data.aboutme.map((aboutme) => {
    return aboutme
  })
  console.log(aboutmeArr)
  return (
    <Container>
      {aboutmeArr.map((item) => (
        <div key={item._id}>
          <Card
            style={{
              width: '18rem',
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item._id}
              </CardSubtitle>
              <CardText>{item.paragraph}</CardText>
              <Button>Button</Button>
              <Button color="danger" onClick={() => handleDelete(item._id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </Container>
  )
}
