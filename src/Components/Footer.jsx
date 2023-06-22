import React from 'react'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { logo } from '../img'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  const deleteAccount = () => {
    const people = JSON.parse(localStorage.getItem('people'))
    const peopleName = []
    for (let index = 0; index < people.length; index++) {
      peopleName.push(people[index].firstName)
      if (peopleName.find((Name) => Name === people[index].firstName)) {
        if (people[index] === 0) {
          localStorage.removeItem('people')
        } else {
          localStorage.setItem(
            'people',
            JSON.stringify(
              JSON.parse(localStorage.getItem('people')).splice(
                people[index],
                1
              )
            )
          )
        }
        localStorage.removeItem('ordered')
        localStorage.removeItem('person')
        console.log(people)
      }
    }
    navigate('/')
    window.location.reload()
  }
  return (
    <div>
      <Row className='m-0 row-cols-lg-3 row-cols-md-2 border-top border-2'>
        <Col className='mt-3 mb-3 border-end'>
          <img src={logo} alt='' />
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>Contact us:</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Adress: alexandria borg Al-arab,sanfara st
            </ListGroup.Item>
            <ListGroup.Item>Phone: +20345761</ListGroup.Item>
            <ListGroup.Item>Hours: 10:00-18:00. Mon - Sat</ListGroup.Item>
            <ListGroup.Item>
              Social Media:{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='m-1'
              >
                <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='m-1'
              >
                <path
                  className=''
                  d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='m-1'
              >
                <path d='M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z' />
              </svg>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className='border-end mt-3 mb-3'>
          <ListGroup variant='flush' className=' '>
            <ListGroup.Item>
              <h4>About:</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              we give you the access to the most fashioned cloths made only for
              you. <a href='./About'>read more</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className='border-end mt-3 mb-3'>
          <ListGroup variant='flush' className=' '>
            <ListGroup.Item>
              <h4>Account:</h4>
            </ListGroup.Item>
            {localStorage.getItem('person') ? (
              <>
                <ListGroup.Item>
                  name : {JSON.parse(localStorage.getItem('person')).firstName}{' '}
                  {JSON.parse(localStorage.getItem('person')).lastName}
                </ListGroup.Item>
                <ListGroup.Item>
                  {JSON.parse(localStorage.getItem('person')).email}
                </ListGroup.Item>
                <ListGroup.Item>
                  {JSON.parse(localStorage.getItem('person')).country}{' '}
                  {JSON.parse(localStorage.getItem('person')).address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant='outline-danger'
                    onClick={() => {
                      localStorage.removeItem('person')
                      navigate('/')
                      window.location.reload()
                    }}
                  >
                    log out
                  </Button>{' '}
                  <Button variant='outline-secondary' onClick={deleteAccount}>
                    delete account
                  </Button>
                </ListGroup.Item>
              </>
            ) : (
              <a href='./Sign'>sign up here</a>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
