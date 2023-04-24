import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { hero4, f1, f2, f3, f4, f5, f6, b2, b7, b4, b18 } from '../img'
import '../App.css'
import Products from '../Products data.js'
import PCard from '../pCard'
function Home() {
  return (
    <>
      <Card className='border-0 rounded-0'>
        <Card.Img src={hero4} alt='hero img' className='vh100' />
        <Card.ImgOverlay className='d-flex justify-content-center text-capitalize flex-column'>
          <h4>Trade-In-Offer</h4>
          <h1 className='h1'>
            Super Value Deals
            <br />
            <span className='text-success'>On All Products</span>
          </h1>
          <h5 className='text-black-50'>
            Save More With Coupon & Up To 70% Off!!!
          </h5>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row className='mt-5 g-3'>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f1} />
              <Card.Body>
                <Card.Title className=' text-bg-primary pb-1 rounded-1 bg-opacity-50 text-center'>
                  Free Shipping
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f2} />
              <Card.Body>
                <Card.Title className=' text-bg-secondary pb-1 rounded-1 bg-opacity-50 text-center'>
                  Online Order
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f3} />
              <Card.Body>
                <Card.Title className=' text-bg-success pb-1 rounded-1 bg-opacity-50 text-center'>
                  Save Money
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f4} />
              <Card.Body>
                <Card.Title className=' text-bg-info text-white pb-1 rounded-1 bg-opacity-50 text-center'>
                  Promotion
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f5} />
              <Card.Body>
                <Card.Title className=' text-bg-warning text-white pb-1 rounded-1 bg-opacity-50 text-center'>
                  Happy Sell
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10.5rem' }} className='p-1'>
              <Card.Img variant='top' src={f6} />
              <Card.Body>
                <Card.Title className=' text-bg-danger pb-1 rounded-1 bg-opacity-50 text-center'>
                  24/7 Support
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <article className='text-capitalize mt-5 '>
          <div className='text-center border-bottom '>
            <h2 className='mb-0'>Popular products</h2>
            <p className='text-black-50 fw-bold'>prepare for the beach days</p>
          </div>
          <Row className='mt-3 g-2' lg={4}>
            {Products.slice(0, 8).map((data) => {
              return <PCard key={data.id} {...data}></PCard>
            })}
          </Row>
        </article>
      </Container>
      <Card className='border-0 rounded-0 mt-5'>
        <Card.Img src={b2} alt='hero img' />
        <Card.ImgOverlay className='text-center d-grid align-content-center'>
          <h5 className='text-white-50'>Repair Service</h5>
          <h2 className='text-light'>
            Up To <span className='text-danger'>70% Off</span> - All T-Shirts &
            Acceeories
          </h2>
          <div>
            <Button href='./Categories.jsx' className='rounded-1' variant='success'>
              explore more
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row md={2} sm={2} className='justify-content-center'>
          <Col>
            <Card className='border-0 rounded-0 mt-5 card-shadow'>
              <Card.Img
                src={b7}
                alt='hero img'
                className='rounded-0 card-shadow'
              />
              <Card.ImgOverlay className='text-center d-grid align-content-center'>
                <h3 className='text-light'>
                  Seasonal Sale
                </h3>
                <h5 className='text-danger text-opacity-75'>Winter Collection -50% off</h5>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className='border-0 rounded-0 mt-5 card-shadow'>
              <Card.Img
                src={b4}
                alt='hero img'
                className='rounded-0 card-shadow'
              />
              <Card.ImgOverlay className='text-center d-grid align-content-center'>
                <h3 className='text-light'>
                  New Footwear Collection
                </h3>
                <h5 className='text-danger text-opacity-75'>Spring/Summer 2023</h5>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className='border-0 rounded-0 mt-5 '>
              <Card.Img
                src={b18}
                alt='hero img'
                className='rounded-0 card-shadow'
              />
              <Card.ImgOverlay className='text-center d-grid align-content-center'>
                <h3 className='text-light'>
                  T-shirts
                </h3>
                <h5 className='text-danger text-opacity-75'>New Trendy prints</h5>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row className='bg-blue w-100 align-items-center mt-5'>
        <Col className='ms-5 p-4 pe-5 bg-banner text-white'>
          <h3>sign up for newsletter</h3>
          <p className='text-white-50'>
            get E-mail updates about our later shop and
            <span className='text-warning'> special offers</span>
          </p>
        </Col>
        <Col className=' flex-shrink-1'>
          <Button
            className='me-5 rounded-1 card-shadow fw-bold btn-text p-1'
            variant='primary'
            href='./Sign.jsx'
          >
            Sign up here
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Home
