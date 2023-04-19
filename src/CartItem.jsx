import React from 'react'
import { Button } from 'react-bootstrap'

import { list } from './CartAdding'
import { useNavigate } from 'react-router-dom'
function CartItem() {
  const navigate = useNavigate()
  function deleteProduct(index) {
    // list.slice(index,1)

    list.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(list))
    window.location.reload()
  }
  const totalCost = () => {
    if (localStorage.getItem('list')) {
      const data = JSON.parse(localStorage.getItem('list'))
      const itemsCost = []
      for (let index = 0; index < data.length; index++) {
        const itemCost = data[index].price
        itemsCost.push(itemCost)
      }

      return itemsCost.reduce((a, v) => (a = a + v), 0)
    }
  }
  const current= new Date()
  const orderDets = {
    date: `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()} `,
    totalcost: totalCost(),
  }
  const handleClick = () =>
    new Promise((no) => {
      const order = []
      if (localStorage.getItem('list')) {
        const newOrder = { ...orderDets, id: new Date().getTime().toString() }
        if (localStorage.getItem('ordered')) {
          no(
            order.push(...JSON.parse(localStorage.getItem('ordered')), newOrder)
          )
        } else {
          no(order.push(newOrder))
        }
        localStorage.setItem('ordered', JSON.stringify(order))
      }
      no.then(
        localStorage.removeItem('list'),
        console.log(localStorage.getItem('ordered') || 'done'),
        setTimeout(() => {
          navigate('../Account.jsx')
          alert('sending you to details page')
        }, 500)
      )
    })

  if (list.length !== 0) {
    return (
      <>
        {list.map(({ img, pName, price, id },e) => (
          <tr key={e}>
            <th>
              <Button
                onClick={deleteProduct}
                variant='danger'
                className='  fw-bold'
              >
                remove
              </Button>{' '}
            </th>
            <th>
              <img src={img} width={50} alt='' />
            </th>
            <th>{pName}</th>
            <th>${price}</th>
            <th>1</th>
          </tr>
        ))}
        <tr>
          <th className='h3 border-2 text-center border-bottom' colSpan={2}>
            Total Cost
          </th>
          <th className='h3 border-2 text-center border-bottom'>
            ${totalCost()}
          </th>
          <th colSpan={2} className='text-center'>
            <Button
              className=' w-75 '
              variant='outline-info'
              onClick={handleClick}
            >
              Buy
            </Button>
          </th>
        </tr>
      </>
    )
  } else {
    return (
      <tr>
        <th colSpan={5}>
          <h3 className='text-center text-warning'>you didn't pick anything</h3>
        </th>
      </tr>
    )
  }
}

export default CartItem
