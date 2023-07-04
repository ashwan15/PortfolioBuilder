import React from 'react'
import ImgOverlayExample from '../components/Header'
import Stack from 'react-bootstrap/Stack'
import {
  Container,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
} from 'reactstrap'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

function GroupExample() {
  const queryClient = useQueryClient()
  // Define the mutation function using useMutation
  const addProjectMutation = useMutation(
    (newProject) =>
      axios.post('http://localhost:4000/api/v1/projects', newProject),
    {
      // onSuccess will be called if the mutation is successful
      onSuccess: () => {
        // Refetch the data after the mutation is successful
        queryClient.invalidateQueries('projects')
      },
    }
  )

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault()
    //new FromData is a javascript class for storing form data.
    //event.target = which element is performing event or where the event is happening
    const formData = new FormData()
    formData.append('title', event.target.title.value)
    formData.append('description', event.target.description.value)
    formData.append('image', event.target.image.files[0])
    try {
      await addProjectMutation.mutateAsync(formData)
      console.log('Project added sucessfully')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Stack gap={5}>
      <Container className="mt-3">
        <ImgOverlayExample></ImgOverlayExample>
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label htmlFor="title" size="lg" sm={2}>
              Project-Title:
            </Label>
            <Col sm={10}>
              <Input type="text" name="title" id="title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label size="lg" sm={2} htmlFor="description">
              Project-Description:
            </Label>
            <Col sm={10}>
              <Input type="text" name="description" id="description" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label size="lg" sm={2} htmlFor="image">
              Project-Image:
            </Label>
            <Col sm={10}>
              <Input type="file" name="image" id="image" />
            </Col>
          </FormGroup>

          <Col sm={10}>
            <Button color="success" className=" mt-3 mb-5" type="submit">
              Add Project
            </Button>
          </Col>
        </Form>
      </Container>
    </Stack>
  )
}
export default GroupExample
