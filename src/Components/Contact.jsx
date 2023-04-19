import React from 'react'
import { Card,Container,Table } from 'react-bootstrap'
import { b19} from '../img'
function Contact() {
  return (
    <div>
      <Card  className='border-0 rounded-0'>
        <Card.Img  src={b19}  alt='about img' className='vh50' />
        <Card.ImgOverlay className='d-flex justify-content-center text-uppercase flex-column align-items-center'>
          <h2 className='h1 text-white'>#Contact us</h2>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Table striped bordered hover className='mb-5 mt-5'>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>e-mail</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>اسلام حسانين</td>
              <td>eslamwtf@gmail.com</td>

            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Contact