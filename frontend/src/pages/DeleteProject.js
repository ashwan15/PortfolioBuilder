import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { removeProject } from '../api'
export default function DeleteProject() {
  const { mutateAsync, isLoading } = useMutation(removeProject)
  const remove = async () => {}
  return <div> Coming from Delete Projects Page</div>
}
