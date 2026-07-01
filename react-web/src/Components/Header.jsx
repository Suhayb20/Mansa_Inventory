import {useContext} from 'react'
import Button from './Button' 
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
     const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogout = () => {
        // Clear tokens from local storage
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLoggedIn(false) // Update the login state in the context
        navigate('/login') // Redirect to login page
    }
  return (
    <>  
    <nav className='navbar container pd-3 pb-3 align-items-start' >
        <Link className='navbar-brand text-light'  to="/"> Mansa Solutions </Link>

        <div> 
          {
              isLoggedIn ? (
                <button className='btn btn-outline-info' onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                    <Button text='Login' class='btn-outline-info' url="/login" />
                    &nbsp;
                    <Button text='Register' class='btn-info' url="/register" />
                </>
              )
          }
          
  
        </div>
    </nav>

    </>
)
}

export default Header