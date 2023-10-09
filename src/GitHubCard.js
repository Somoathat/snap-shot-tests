import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// username
// photo
// blurb
function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/photo.jpg" />
    <Card.Body>
      <Card.Title>Somoathat</Card.Title>
      <Card.Text>
        A student at SDSU, becoming a programmer.
        
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  )
}

export default GitHubCard