import Stack from 'react-bootstrap/Stack'
import React from 'react'
import Container from 'react-bootstrap/Container'
import ImgOverlayExample from '../components/Header'
import GroupExample from '../components/Card'

export default function Home() {
  return (
    <>
      <Container className="mt-2 mb-2">
        <Stack gap={3}>
          <div>
            <ImgOverlayExample></ImgOverlayExample>
          </div>
          <div>
            <GroupExample />
          </div>
          <div className="bg-light border">Third item</div>
        </Stack>
      </Container>
    </>
  )
}
