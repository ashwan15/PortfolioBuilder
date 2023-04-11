import axios from 'axios'
import { useForm } from 'react-hook-form'
//import axios from 'axios'
//import { useMutation } from 'react-query'
//resolvers oackage helps to make integration between reacthookform and yup
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row'

function FormExample() {
  const schema = yup.object().shape({
    firstname: yup.string().required('Your Firstname is Required!'),
    lastname: yup.string().required('Your Lastname is Required!'),
    email: yup.string().email().required('Email address is required'),
    password: yup.string().min(4).max(20).required(),
  })

  //with formstate:{errors} we get access to all the errors according the inout field
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    //the format of the form
    //what kind of values should come in the data object from input fields of form
    resolver: yupResolver(schema),
  })

  //instead of console.log
  //we will send data to the server
  //submit function will send data
  const Submit = (data, e) => {
    e.preventDefault() // prevent the default form submit behavior
    console.log(data)
    axios
      .post('http://localhost:3001/api/v1/users', data)
      .then((response) => {
        console.log(response)
        // Handle success
        reset() // reset the form
      })
      .catch((error) => {
        console.error(error)
        // Handle error
      })
  }

  return (
    <Stack gap={3}>
      <div className="mt-3">
        <Header></Header>
      </div>
      <Container className=" mt-5 mb-5">
        <Form onSubmit={handleSubmit(Submit)}>
          <Row className="mb-3"></Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register('email')}
              />
              <p>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('password')}
              />
              <p>{errors.password?.message}</p>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </Stack>
  )
}

export default FormExample
