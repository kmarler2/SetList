import React from 'react';
import './header.css'

const Header = () => {

  return(
    <div className='header_div'>
      <img src={window.location.origin + '/setlist.png'} className='header'/>
    </div>
  )
}

export default Header;