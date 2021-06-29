import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import ApiContextProvider from './apiContextProvider'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// ''  = text
// `` = hiermee kan je javascript in een string gooien

// start project npm start
