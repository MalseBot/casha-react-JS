import React from 'react'
import { Card, Table, Container } from 'react-bootstrap'
import { b16 } from '../img'
import CartItem from '../CartItem.jsx'

function Cart() {
  
  return (
    <div>
      <Card className='border-0 rounded-0'>
        <Card.Img src={b16} alt='about img' className='vh50' />
        <Card.ImgOverlay className='d-flex justify-content-center text-uppercase flex-column align-items-center'>
          <h2 className='h1 text-white'>#Shopping_Cart</h2>
        </Card.ImgOverlay>
      </Card>
      <div>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  )
}

export default Cart
