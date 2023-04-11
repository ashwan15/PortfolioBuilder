export const removeProject = async (id) => {
  const response = await fetch(
    `localhost:3001/api/v1
/projects/${id}`,
    { method: 'DELETE' }
  )
  if (!response.ok) {
    throw new Error(response.json().message)
  }
  return true
}
