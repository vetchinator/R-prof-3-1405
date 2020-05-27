import React from 'react'
import {Link} from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './style.css'

export default () => {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <p>В разработке...</p>
      <Link to='/'><ArrowBackIcon/>Вернуться</Link>
    </div>
  )
}