import React from 'react'
import Logo from '../images/tesla.jpg'

const Footer = () => {
  return (
    <footer>
      <img style={{width:'120px',marginLeft:'10px'}} src={Logo} alt="logo" />
      <span>
        Made with ❤️ and <b>React</b>
      </span>
    </footer>
  )
}

export default Footer