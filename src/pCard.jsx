import React, { useEffect } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { CartAdding } from './CartAdding'
function PCard({ img, pName, info, price, rate }) {
  const clickHandle = () => CartAdding({ img, pName, info, price, rate })

  useEffect(() => {}, [])
  return (
    <Col>
      <Card className='card-hover card-sm mb-3'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title className=''>{pName}</Card.Title>
          <Card.Text>{info}</Card.Text>
          <Card.Text className='m-0'>
            {rate}
            <FontAwesomeIcon icon={faStar} style={{ color: '#e4d321' }} />
          </Card.Text>
          <Card.Text>${price}</Card.Text>
          <Button className=' bg-transparent border-0' onClick={clickHandle}>
            <FontAwesomeIcon
              icon={faCartPlus}
              size='lg'
              style={{ color: '#55b04e' }}
            />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PCard
