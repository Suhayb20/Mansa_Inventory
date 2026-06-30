import React, {useState} from 'react'
import axios from 'axios'



function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)



    const handleInputChange = (setter) => (e) => {
        setter(e.target.value)
        setErrors({})
    }

    const handleRegistration = async (e) => { 
        e.preventDefault()
        setLoading(true)
        // Handle registration logic here
        const userData = {
            username, email, password
        }
        
        // You can send this data to your backend API for registration
        try {
         const  response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
         console.log('response.data==', response.data)
         console.log ('Registration Successful')
         setErrors({}) // Clear errors on successful registration
         setSuccess(true)
        } catch (error) {
            setErrors(error.response.data)
            console.error('Registration Failed:', error.response.data)
       } finally {
            setLoading(false)
        }
    }


  return (

    <>
    <div  className='container' >
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form onSubmit={handleRegistration}>
                    <div className='mb-3'>  
                        <input className='form-control' type="text"  placeholder='Enter your name' value={username} onChange={handleInputChange(setUsername)} />
                        <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                    </div>
                    <div className='mb-3'>
                        <input className='form-control' type="text"  placeholder='Enter your email' value={email} onChange={handleInputChange(setEmail)} />
                    </div> 
                    <div className='mb-3'>
                        <input className='form-control' type="password" placeholder='Enter your password' value={password} onChange={handleInputChange(setPassword)} />   
                        <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>              
                    </div>
                    {success && <div className='text-success mb-3'>Registration successful! You can now log in.</div>}
                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> Registering please wait... </button>
                    )
                     : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                     )}
                </form>
            </div>
        </div>
    </div>
    </>
                         

  )
}

export default Register