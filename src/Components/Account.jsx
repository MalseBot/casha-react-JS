import React from 'react'
import { Card, Row, Col, ListGroup, Table,Container } from 'react-bootstrap'
import { AB } from '../img'
function Account() {

    const orders=JSON.parse(localStorage.getItem('ordered'))

  return (
    <div>
      <Card className='border-0 rounded-0  p-0'>
        <Card.Img src={AB} alt='about img' className=' vh100 opacity-50 p-0' />
        <Card.ImgOverlay className=' p-0'>
          <Row className=' h-100 justify-content-between p-0'>
            <Col lg={10} md={8} className='bg-dark bg-opacity-50'>
              <Container className='mt-5 text-center text-capitalize'>
                <div style={{height:100}}></div>
                <h2 className='text-light'>orders information</h2>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>order date</th>
                      <th>total cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders  && orders.map(({id,date,totalcost},e)=>(
                      <tr key={id}>
                        <th>{e+1}</th>
                        <th>{date}</th>
                        <th>${totalcost}</th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </Col>
            <Col
              lg={2}
              md={4}
              className='bg-secondary bg-opacity-25 h-100 p-0 position-relative border-start border-2 border-secondary'
            >
              <ListGroup
                variant='flush'
                className='mt-3 bg-transparent position-absolute top-0  text-center fw-bold text-capitalize'
              >
                <ListGroup.Item className='bg-transparent border-1 mt-5'>
                  account information
                </ListGroup.Item>
                <ListGroup.Item className='bg-transparent  mt-5'>
                  name :{' '}
                  {JSON.parse(localStorage.getItem('person')).firstName}{' '}
                  {JSON.parse(localStorage.getItem('person')).lastName}
                </ListGroup.Item>
                <ListGroup.Item className='bg-transparent '>
                  email :{' '}
                  {JSON.parse(localStorage.getItem('person')).email}
                </ListGroup.Item>
                <ListGroup.Item className='bg-transparent '>
                  country :{' '}
                  {JSON.parse(localStorage.getItem('person')).country}
                </ListGroup.Item>
                <ListGroup.Item className='bg-transparent '>
                  location :{' '}
                  {JSON.parse(localStorage.getItem('person')).address}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Account
