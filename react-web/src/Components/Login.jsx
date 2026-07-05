import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'



const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value)
        setError({})
    }

    const handleLogin = async (e) => { 
        e.preventDefault()
        setLoading(true)
        // Handle Login logic here
        const userData = {
            username, password
        }
        
        // console.log ('User credentials ==>', userData) 

        // You can send this data to your backend API for login
        try {
         const  response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
         localStorage.setItem ('accessToken', response.data.access)
         localStorage.setItem ('refreshToken', response.data.refresh)
         console.log ('Successfully logged in')
         setIsLoggedIn(true) // Update the login state in the context
         navigate('/Dashboard') // Redirect to dashboard page
        
        } catch (error) {
          console.error('Invalid Credentials')
          setError('Invalid Credentials')
       } finally {
            setLoading(false)
        }
    }




  return (
    <>
    <div  className='container' >
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'>Login to the account </h3>
                <form onSubmit={handleLogin}>
                    <div className='mb-3'>  
                        <input className='form-control' type="text"  placeholder='Enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

            
                    <div className='mb-3'>
                        <input className='form-control' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />   
                    </div>


                  {error && <div className='text-danger'>{error}</div>}

                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> please wait... </button>
                    )
                     : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                     )}
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login