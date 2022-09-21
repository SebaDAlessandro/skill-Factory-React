import React from 'react'
import logo from '../assets/checklistimg.png'
import '../styles/Logo.css'

const Logo = () => {
  return (
    <div className='logo__container'>
        <img className='logo__img' src={logo} alt='logo img'/>
    </div>
  )
}

export default Logo