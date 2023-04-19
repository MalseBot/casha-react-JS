import React from 'react'
import { aboutB ,a6} from '../img'
import { Card, Container,Row,Col,Table } from 'react-bootstrap'
function About() {
  return (
    <div>
      <Card className='border-0 rounded-0'>
        <Card.Img src={aboutB} alt='about img' className='vh50' />
        <Card.ImgOverlay className='d-flex justify-content-center text-uppercase flex-column align-items-center'>
          <h2 className='h1 text-white'>#About us</h2>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Card className='border-0 mt-5 mb-5'>
          <Row
            md={1}
            sm={1}
            lg={2}
            className='p-2   align-items-center justify-content-center '
          >
            <Col className='text-center'>
              <img src={a6} className='w-75 card-shadow m-2' alt='' />
            </Col>
            <Col className='ps-5 pe-5'>
              <h2 className='h2'>Who We Are ?</h2>
              <p className=' fs-6 text-black-50'>
                we are a fashion market sell cloths for a good prices and
                quality. <br /> our goal is sewing the best cloths in quality
                and design. <br />
                our mission is you walking with style. <br />
              </p>
            </Col>
          </Row>
        </Card>

        <Table striped bordered hover className='mb-5'>
          <thead>
            <tr>
              <th>#</th>
              <th> الاسم</th>
              <th>Task</th>
              <th>المسار</th>
              <th>رقم الجلوس</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>اسلام حسانين احمد حجازي</td>
              <td>قام بعمل المشروع</td>
              <td>تسويق</td>
              <td>77128</td>
            </tr>
    </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default About
