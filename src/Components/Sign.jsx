import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel, Row, Col, Card } from 'react-bootstrap'
import { b16 } from '../img'
function Sign() {
  // signing up function
  const navigate = useNavigate()
  const [signed, setSigned] = useState(true)
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    address: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      person.firstName &&
      person.lastName &&
      person.email &&
      person.password &&
      person.address &&
      person.country
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPerson({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        address: '',
        password: '',
      })
      if (localStorage.getItem('people')) {
        const newPeople = [newPerson]
        newPeople.push(...JSON.parse(localStorage.getItem('people')))
        localStorage.setItem('people', JSON.stringify(newPeople))
      } else {
        localStorage.setItem('people', JSON.stringify([newPerson]))
      }
      localStorage.setItem('person', JSON.stringify(newPerson))
      setTimeout(() => {
        navigate('/')
        setTimeout(window.location.reload(), 20)
        alert('signed successfuly ,sending you to home page')
      }, 20)
    }
  }

  // signing in function
  const handleLogin = (e) => {
    e.preventDefault()
    if (person.email && person.password) {
      const people = JSON.parse(localStorage.getItem('people'))
      console.log(people)
      const peopleEmail = []
      const peoplePassword = []
      for (let index = 0; index < people.length; index++) {
        peopleEmail.push(people[index].email)
        peoplePassword.push(people[index].password)
        console.log(peopleEmail, peoplePassword)
      }
      if (
        peopleEmail.find((email) => email === person.email) &&
        peoplePassword.find((password) => password === person.password)
      ) {
        localStorage.setItem(
          'person',
          JSON.stringify(
            people[peopleEmail.findIndex((email) => email === person.email)]
          )
        )
        setTimeout(() => {
          navigate('/')
          window.location.reload()
        }, 50)
      } else {
        setTimeout(() => alert('email or password is wrong'), 100)
      }
    }
  }
  return (
    <div>
      <Card className='border-0 rounded-0'>
        <Card.Img src={b16} alt='about img' className='vh50' />
        <Card.ImgOverlay className='d-flex justify-content-center text-uppercase flex-column align-items-center'>
          <h2 className='h1 text-white'>#Join_Us</h2>
        </Card.ImgOverlay>
      </Card>

      <div>
        {signed ? (
          <div>
            <Row>
              <Col></Col>
              <Col lg={4} md={8} sm={12} className='mt-5 mb-5 '>
                <Form className=' position-relative'>
                  <FloatingLabel
                    controlId='floating'
                    label='Email address'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='email'
                      placeholder='name@example.com'
                      name='email'
                      value={person.email}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingFirst'
                    label='first name'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='text'
                      placeholder='Malse'
                      name='firstName'
                      value={person.firstName}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingLast'
                    label='last name'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='text'
                      placeholder='Malse'
                      name='lastName'
                      value={person.lastName}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingPassword'
                    label='Password'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={person.password}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='repeat password'
                    label='repeat password'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      type='password'
                      placeholder='Password'
                      name='repeat password'
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingcountry'
                    label='country'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='text'
                      placeholder='Malse'
                      name='country'
                      value={person.country}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingaddress'
                    label='address'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='text'
                      placeholder='Malse'
                      name='address'
                      value={person.address}
                    />
                  </FloatingLabel>
                  <Button
                    variant='outline-danger'
                    className='mt-1 end-0 position-absolute'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Sign up
                  </Button>
                  <Button
                    variant='outline-success'
                    className='mt-1 end-50 position-absolute'
                    type='submit'
                    onClick={() => setSigned(!signed)}
                  >
                    Sign in
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row>
              <Col></Col>
              <Col lg={4} md={8} sm={12} className='mt-5 mb-5 '>
                <Form className=' position-relative'>
                  <FloatingLabel
                    controlId='floating'
                    label='Email address'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='email'
                      placeholder='name@example.com'
                      name='email'
                      value={person.email}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId='floatingPassword'
                    label='Password'
                    className='mb-3 '
                  >
                    <Form.Control
                      required
                      onChange={handleChange}
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={person.password}
                    />
                  </FloatingLabel>
                  <Button
                    variant='outline-success'
                    className='mt-1 end-0 position-absolute'
                    type='submit'
                    onClick={handleLogin}
                  >
                    Sign in
                  </Button>
                  <Button
                    variant='outline-danger'
                    className='mt-1 end-50 position-absolute'
                    type='submit'
                    onClick={() => setSigned(!signed)}
                  >
                    Sign up
                  </Button>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sign
