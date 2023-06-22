import React from 'react'
import ReactDOMClient from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  NavBar,
  Footer,
  About,
  Home,
  Cart,
  Account,
  Sign,
  Contact,
  Categories,
} from './Components'

import './index.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <div>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    <Footer />
    </Router>
  </div>
)
