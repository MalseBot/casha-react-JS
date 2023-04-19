import React from 'react'
import ReactDOMClient from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
    <NavBar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about.jsx' element={<About />} />
        <Route path='/Account.jsx' element={<Account />} />
        <Route path='/Cart.jsx' element={<Cart />} />
        <Route path='/Categories.jsx' element={<Categories />} />
        <Route path='/Sign.jsx' element={<Sign />} />
        <Route path='/Contact.jsx' element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
  </div>
)
