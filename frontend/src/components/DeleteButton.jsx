import React from 'react'

import Button from 'react-bootstrap/Button'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

function TypesExample() {
  //with this query we are fetching data from server
  const { isLoading, error, data, refetch } = useQuery('aboutproject', () =>
    axios('http://localhost:3001/api/v1/projects')
  )
  //with this  query we are only tell our server to perform the operation
  //only telling server what todo
  //storing useMutation function into deleteProjectMutation
  const deleteProjectMutation = useMutation(
    (projectId) =>
      axios.delete(`http://localhost:3001/api/v1/aboutprojects/${projectId}`),
    {
      onSuccess: () => {
        refetch() // This will refetch the data from the server and update the 'data' variable in the useQuery hook
      },
    }
  )
  const handleDeleteProject = (projectId) => {
    deleteProjectMutation.mutate(projectId)
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <Button variant="danger">Delete</Button>
    </>
  )
}

export default TypesExample
