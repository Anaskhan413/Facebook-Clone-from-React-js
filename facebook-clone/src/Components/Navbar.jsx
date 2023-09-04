import React from 'react'
import { FaFacebook, FaSistrix, FaFlag , FaVideo  , FaUsers , FaGamepad , FaPlus , FaFacebookMessenger , FaBell ,FaCaretDown} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar" >

      <div className="navbar__left">
        <div className="navbarfirstIcon">
          <FaFacebook className='navbarIcon' />
        </div>
        <div className="navbar__search">
          <input type="text" className='navbar_firstsearchbar' placeholder='Facebook Search' />
          <FaSistrix className='inputsearchicon' />
        </div>
      </div>


      <div className="navbar__middle">

      <span className='middleName'>
          <FaHome className='navbar-middle-icons' />
        </span>

      
        <span className='middleName'>
          <FaFlag className='navbar-middle-icons' />
          <span className='navbar-notify'>3</span>
        </span>

 
        <span className='middleName'>
          <FaVideo className='navbar-middle-icons' />
          <span className='navbar-notify'>20</span>

        </span>

        <span className='middleName'>
          <FaUsers className='navbar-middle-icons' />
          <span className='navbar-notify'>10</span>

        </span>

        <span className='middleName'>
          < FaGamepad className='navbar-middle-icons' />
          <span className='navbar-notify'>40</span>

        </span>

      </div>


      <div className="navbarrightlast">
<span className="navbarlastsect">
<FaPlus />
</span>
<span className="navbarlastsect">
<FaFacebookMessenger />
</span>

<span className="navbarlastsect">
<FaBell />
</span>

<span className="navbarlastsect">
<FaCaretDown />
</span>



      </div>


    </div>
  )
}

export default Navbar
