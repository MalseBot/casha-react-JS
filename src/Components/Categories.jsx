import React, { useEffect, useState } from 'react'
import { Card, Nav, Container, Row, Form } from 'react-bootstrap'
import Products from '../Products data.js'
import PCard from '../pCard'
import { b1 } from '../img'

function Categories() {
  const [item, setItem] = useState(Products)
  const [nSelect, addNSelect] = useState('all')
  const [search, addSearch] = useState('')

  const filterCategory = (category) => {
    if (category === 'all') {
      const newSearch = Products.filter((items) => items.pName.match(search))
      setItem(newSearch)
      return
    }
    const newItem = Products.filter((items) => items.category === category)
    const newSearch = newItem.filter((items) => items.pName.match(search))
    setItem(newSearch)
  }

  useEffect(() => {
    filterCategory(nSelect)
  }, [search, nSelect])

  return (
    <div>
      <Card className='border-0 rounded-0'>
        <Card.Img src={b1} alt='about img' className='vh50' />
        <Card.ImgOverlay className='d-flex justify-content-center text-uppercase flex-column align-items-center'>
          <h2 className='h1 text-white'>#Categories</h2>
          <p className='text-white-50'>
            Save more with cuopons & up to
            <span className='text-warning'> 70%</span> off!
          </p>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Nav
          variant='tabs'
          className=' justify-content-center mt-3 mb-3'
          defaultActiveKey='/home'
        >
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                addNSelect('all')
              }}
              eventKey='All'
            >
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='T-shirt'
              onClick={() => {
                addNSelect('T-shirt')
              }}
            >
              T-shirts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='pants'
              onClick={() => {
                addNSelect('pants')
              }}
            >
              Pants
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='cuts'
              onClick={() => {
                addNSelect('cuts')
              }}
            >
              unique
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            onChange={(e) => {
              addSearch(e.target.value)
            }}
          />
        </Form>
        <Row className='mt-3 g-2 ' md={3} sm={3} lg={4}>
          {item.map((data) => {
            return <PCard key={data.id} {...data} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Categories
