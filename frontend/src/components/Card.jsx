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
import { useState, useEffect } from 'react'
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
    axios('http://localhost:4000/api/v1/projects')
  )

  //useEffect for images
  const [images, setImages] = useState({})

  /**useEffect(() => {
    console.log('useEffect hook triggered')
    async function fetchImages() {
      try {
        const imageUrls = await Promise.all(
          data.data.projects.map(async (project) => {
            if (!project.imageUrl) return null
            const response = await axios.get(
              `http://localhost:3001/uploads/${project.imageUrl}`,
              { responseType: 'blob' }
            )
            console.log(response)
            const imageUrl = URL.createObjectURL(response.data)
            console.log(imageUrl)

            return { id: project._id, url: imageUrl }
          })
        )

        const filteredImageUrls = imageUrls.filter(
          (imageUrl) => imageUrl !== null
        )
        const imageObj = filteredImageUrls.reduce((acc, curr) => {
          if (curr && curr.id && curr.url) {
            acc[curr.id] = curr.url
          }
          return acc
        }, {})

        setImages(imageObj)
      } catch (error) {
        console.error(error)
      }
    }

    if (data) {
      fetchImages()
    }
  }, [data])**/

  //Simplified useEffect
  useEffect(() => {
    async function fetchImages() {
      const imageUrls = []
      console.log(data.data.projects)
      for (let i = 0; i < data.data.projects.length; i++) {
        const project = data.data.projects[i]

        const imageUrl = `data:image/jpeg;base64,${project.image}`
        console.log(imageUrl)
        imageUrls.push({ id: project.id, url: imageUrl })
      }
      console.log('Image URLs:', imageUrls)

      const imageObj = imageUrls.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: curr.url }),
        {}
      )
      setImages(imageObj)
    }
    if (data) {
      fetchImages()
    }
  }, [data])

  //this function tells server that we want to perform delete operation
  //this is only the definition of the function
  const deleteProject = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/projects/${id}`
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

  //console.log(projectsArr)

  //console.log(`This is projects arrays ${projects}`)
  return (
    <Container>
      {data.data.projects.map((project) => (
        <div key={project._id}>
          <Card
            key={project._id}
            style={{
              width: '18rem',
            }}
          >
            <img
              alt="Sample"
              src={images[project._id]}
              onError={(e) => {
                console.log('Error loading image:', e)
                e.target.onerror = null
                e.target.src = 'https://via.placeholder.com/150' // fallback image url
              }}
            />
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {project._id}
              </CardSubtitle>
              <CardText>
                {project.description.length > 150 && !showFullText
                  ? `${project.description.slice(0, 150)}...`
                  : project.description}
                {project.description.length > 150 && (
                  <Button onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? 'Read less' : 'Read more'}
                  </Button>
                )}
              </CardText>

              <Button>Button</Button>
              <Button color="danger" onClick={() => handleDelete(project._id)}>
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
