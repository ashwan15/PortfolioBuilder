import Container from 'react-bootstrap/Container'
//import Card from 'react-bootstrap/Card'
//import CardGroup from 'react-bootstrap/CardGroup'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap'
//import Button from 'react-bootstrap/Button'
//import src from '../assests/html.jpg'
//import { useEffect, useState } from 'react'
//import DeleteButton from './DeleteButton'
import { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

//import { useEffect } from 'react'

function GroupExample() {
  /**const [data, setData] = useState({
    title: '',
    description: '',
  })**/

  /** .then((data) => {
        console.log(data)
      })
     
  }, [])

  /**const Data = data.map((data) => {
    return data
  })
  console.log(Data)**/
  /**const [userData, setuserData] = useState([
    {
      name: '',
      description: '',
    },
  ])**/

  /**const [userInfo, setUserInfo] = useState([
    {
      name: '',
      description: '',
    },
  ])()**/
  //first fetching data from server and saving the data  in data variable
  const { isLoading, error, data, refetch } = useQuery('projects', () =>
    axios('http://localhost:3001/api/v1/projects')
  )
  //this function tells server that we want to perform delete operation
  //this is only the definition of the function
  const deleteProject = async (id) => {
    const response = await axios.delete(
      `http://localhost:3001/api/v1/projects/${id}`
    )
    return response.data._id
  }

  //to perform delete operation useMutation hook is used
  const { mutate } = useMutation(deleteProject, {
    onSuccess: () => refetch(),
  })
  //handleDelete function will onClick sends idof the project
  //to the mutate function
  const handleDelete = (id) => {
    mutate(id)
  }

  const [showFullText, setShowFullText] = useState(false)

  if (error) return <h1>Error:{error.message},try again</h1>
  if (isLoading) return <h1>Loading..</h1>

  let projectsArr = data.data.projects.map((project) => {
    return project
  })

  console.log(projectsArr)
  //console.log(`This is projects arrays ${projects}`)
  return (
    <Container>
      {data.data.projects.map((item) => (
        <div key={item._id}>
          <Card
            style={{
              width: '18rem',
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">{item.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item._id}
              </CardSubtitle>
              <CardText>
                {item.description.length > 150 && !showFullText
                  ? `${item.description.slice(0, 150)}...`
                  : item.description}
                {item.description.length > 150 && (
                  <Button onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? 'Read less' : 'Read more'}
                  </Button>
                )}
              </CardText>

              <Button>Button</Button>
              <Button color="danger" onClick={() => handleDelete(item._id)}>
                Delete Project
              </Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </Container>
  )
}

export default GroupExample
