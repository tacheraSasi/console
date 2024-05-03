import { useEffect, useState } from 'react';
import { useCookies} from 'react-cookie'
import EkilieAlert from '../../components/EkilieAlert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';

const TypingText = () => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const originalText = "Welcome, Taskmasters!. Step into myTasks, where productivity reigns supreme. Let's conquer tasks together!";
    let currentIndex = 0;

    const typingAnimation = setInterval(() => {
      setAnimatedText(originalText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(typingAnimation);
      }
    }, 150);

    return () => clearInterval(typingAnimation);
  }, []);

  return (
    <h2>
      {animatedText}
      <span className="cursor">|</span>
    </h2>
  );
};

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(`http://localhost:3000/myTasks/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
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
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('Error during authentication:', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      });
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>myTasks</h1>
          <TypingText />
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>

            <p>
              Don't have a myTasks account?
              <Link to='/register' style={{color:'#266d44'}}>Join</Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
