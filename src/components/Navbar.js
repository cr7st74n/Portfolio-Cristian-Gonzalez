import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { FaBeer  } from "@react-icons/all-files/fa/FaBeer";

export default function Navbar() {
        const [extendNav, setExpendNav] = useState(false);

        const location = useLocation();
        // good for user experience
        useEffect(()=>{
            setExpendNav(false);
        }, [location])

      return (
    <div className='navbar' id={extendNav ? "open": "close"}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpendNav((prev)=> !prev)}}>
             <FaBeer />
            </button>
        </div>
        <div className='links'>
            <Link to="/Portfolio-Cristian-Gonzalez">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/info">Contact us</Link>
        </div>
    </div>
  );
}
