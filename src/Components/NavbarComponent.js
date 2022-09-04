import React from 'react'
import '../Styles/NavbarComponent.css'

function NavbarComponent() {
  return (
    <div className='navbar-component py-3 text-white d-flex justify-content-between align-items-center px-5'>
        <a href="http://localhost:3000/" rel="noopener noreferrer">
          <img src="images/troll-face.png" alt="" className='me-3' width={"40px"}  />
          <span className='fw-bold fs-5 text-white'>Meme Generator</span>
        </a>
         <span className='lead fs-6'>React Course - Project 3</span>  
    </div>
  )
}
export default NavbarComponent;