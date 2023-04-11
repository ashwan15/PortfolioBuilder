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
      axios.post('http://localhost:3001/api/v1/projects', newProject),
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
    const formData = new FormData(event.target)
    //after storing  new form data in formData
    //we then pass that data to the newProject object
    const newProject = {
      title: formData.get('title'),
      description: formData.get('description'),
    }
    //after storing form data
    // Call the mutation function to add the new project
    addProjectMutation.mutate(newProject)
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
