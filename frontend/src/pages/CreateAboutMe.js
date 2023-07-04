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

function CreateAboutMe() {
  const queryClient = useQueryClient()
  // Define the mutation function using useMutation
  const addProjectMutation = useMutation(
    //newAboutme is object with  input values of form
    (newAboutme) =>
      axios.post('http://localhost:4000/api/v1/aboutme', newAboutme),
    {
      // onSuccess will be called if the mutation is successful
      onSuccess: () => {
        // Refetch the data after the mutation is successful
        queryClient.invalidateQueries('aboutme')
      },
    }
  )

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault()
    //new FromData is a javascript class for storing form data.
    //event.target = which element is performing event or where the event is happening
    const formData = new FormData(event.target)
    //we can only collect data through name attribute
    //after storing  new form data in formData
    //we then pass that data to the newProject object
    const newProject = {
      name: formData.get('title'),
      paragraph: formData.get('description'),
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
              Role:
            </Label>
            <Col sm={10}>
              <Input type="text" name="title" id="title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label size="lg" sm={2} htmlFor="description">
              About Me:
            </Label>
            <Col sm={10}>
              <Input type="text" name="description" id="description" />
            </Col>
          </FormGroup>

          <Col sm={10}>
            <Button color="success" className=" mt-3 mb-5" type="submit">
              Add AboutMe
            </Button>
          </Col>
        </Form>
      </Container>
    </Stack>
  )
}
export default CreateAboutMe
