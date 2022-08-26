import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navigation'>
        <div className='toggleButton'>
            {""}
            <button></button>
        </div>
        <div>
            <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/info">Contact us</Link>
            </div>
        </div>
    </div>
  )
}
