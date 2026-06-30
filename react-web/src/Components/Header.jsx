import React from 'react'
import Button from './Button' 
import {Link} from 'react-router-dom'


function Header() {
  return (

    <>  
    <nav className='navbar container pd-3 pb-3 align-items-start' >
        <Link className='navbar-brand text-light'  to="/"> Mansa Solutions </Link>

        <div> 
          <Button text='Login' class='btn-outline-info' url="/login" />
          &nbsp;
          <Button text='Register' class='btn-info' url="/register" />
  
        </div>
    </nav>

    </>
)
}

export default Header