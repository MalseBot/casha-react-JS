import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { logo } from '../img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const signed =localStorage.getItem('person')
  const [sign,setSign]=useState(true)
  useEffect(()=>{if (signed !== null) {
    
    setSign(false)}else{
      setSign(true)
    }
  },[])
  
  // cartnumbering
  // const [cartNumber, setCartNumber] = useState('')
  // useEffect(() => {
  //   if (cartNumber !== null) {
  //     setCartNumber(JSON.parse(localStorage.getItem('list')).length)
  //   }
  //   return
  // }, [cartNumber, JSON.parse(localStorage.getItem('list')).length,])
  return (
    <div className='text-uppercase '>
      <Navbar bg='light' expand='lg' fixed='top'>
        <Container fluid>
          <Navbar.Brand href='/'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
            <Nav
              className=' my-2 my-lg-0 text-black-50 fw-bold'
              style={{ maxHeight: 'fit-content' }}
              navbarScroll
            >
              {sign ? (
                <Nav.Link
                  className='hover-link position-relative overflow-hidden'
                  href='./Sign'
                >
                  sign up
                </Nav.Link>
              ) : (
                <Nav.Link
                  className='hover-link position-relative overflow-hidden'
                  href='./account'
                >
                  {JSON.parse(localStorage.getItem('person')).firstName}
                </Nav.Link>
              )}
              <Nav.Link
                className='hover-link position-relative overflow-hidden'
                href='./About'
              >
                About
              </Nav.Link>
              <Nav.Link
                className='hover-link position-relative overflow-hidden'
                href='./Contact'
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className='hover-link position-relative overflow-hidden'
                href='./Categories'
              >
                Categories
              </Nav.Link>
              <Nav.Link
                className='hover-link position-relative overflow-hidden pe-4 ps-3 me-2'
                href='./Cart'
              >
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                {/* <Badge className='bg-black bg-opacity-50 p-1 rounded-1 ms-1  '>
                  {cartNumber}
                </Badge> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
