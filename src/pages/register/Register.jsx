import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useCookies} from 'react-cookie'
import EkilieAlert from '../../components/EkilieAlert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"

const Register = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('passwords does not  match!')
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      });
      
      return
    }
    
    const response = await fetch(`http://localhost:3000/myTasks/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, email, password})
    })

    const data = await response.json()

    if (data.error) {
      setError(data.error)
      console.log(error)
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      });
    } else {
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)
      setCookie('Name', data.name)
      navigate('/')

      
    }

  }
  


  return (
    <div className="register">
      <div className="card">
        <div className="left">
            <h1>myTasks</h1>
            <p>             
                Share your insights, ideas, perspectives and what
                 on your mind about different aspects of your daily life.
                  You will also be able to see what is in other peoples minds. 
                  Meet new people, your opinions matter. <br />
                ~ <i>let the world listen</i> ~
            </p>
        </div>
        <div className="right">
            <h1>Join myTasks </h1>{/* 
            {error&& <EkilieAlert />} */}
            <form >
                <input 
                  type="text" 
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)} 
                  required/>
                <input 
                  type="email" 
                  placeholder="Email"
                  onChange={(e)=> setEmail(e.target.value)} 
                  required/>
                <input 
                  type="password" 
                  placeholder="password" 
                  onChange={(e)=> setPassword(e.target.value)}
                  required/>
                <input 
                  type="password" 
                  placeholder="confirm your password"
                  onChange={(e)=> setConfirmPassword(e.target.value)} 
                  required/>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Register</button>

                <p>
                  Already have a myTasks account?
                  <Link to='/login' style={{color:'#266d44'}}>login</Link>
                </p>
            </form>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition='Bounce'
            />
            
        </div>
      </div>
    </div>
  )
}

export default Register
