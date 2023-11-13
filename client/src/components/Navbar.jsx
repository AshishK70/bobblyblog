import React from 'react'
import Logo from '../images/starbucks.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <div className="navLogo">
          <img style={{width:'120px'}} src={Logo} alt="logo" />
        </div>
        <div className="navLinks">
          <Link className='link' to='/?cat=art'>
            <h4>Art</h4>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h4>Science</h4>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h4>Cinema</h4>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h4>Design</h4>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h4>Food</h4>
          </Link>
          <span>Ashish</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar