import { useState } from 'react'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from './pages/home/Home';
import { useCookies } from 'react-cookie'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Skeleton from './components/skeleton/Skeleton';
import Sense from './pages/sense/Sense';
import Chat from './pages/chat/Chat';
import Emailbox from './pages/emailbox/Emailbox';
const App = ()=> {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [currentUser, setCurrentUser] = useState(true)
  const [isLeftbarOpened, setIsLeftbarOpened] = useState(false)
  const [ tasks, setTasks] = useState(null)

  const getData = async () => {
    if(authToken){
      try {
      const response = await fetch(`http://localhost:3000/myTasks/${userEmail}`)
      const json = await response.json()
      setTasks(json)
      } catch (err) {
      console.error(err)
      }
    }
  }
  const Layout = () => {

    return(
      <div>
        {/* <Navbar setIsLeftbarOpened={setIsLeftbarOpened}/> */}
        <div style={{ display:"flex" }}>
          <Leftbar setIsLeftbarOpened={setIsLeftbarOpened}/>
          <div style={{flex:6}}>
            <Outlet />
          </div>
          {/* <Rightbar /> */}

        </div>

      </div>
    )
  }
  const Redirect = ()=>{
    window.location.href = '/emailbox'
    return(
      <div className="redirect">
        <h1>
          Redirecting...
        </h1>
      </div>
    )
  }
 

  const ProtectedRoute = ({ children })=>{
    if(!currentUser){
      return <Navigate to = "/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute>
                <Layout />
              </ProtectedRoute>,
      children:[
        {
        path:"/",
        element:<Home getData={getData} tasks={tasks}/>
        },
        {
          path:"/sense",
          element:<Sense />
        },
        {
          path:"/sense/chat/:id",
          element:<Chat />
        },
        {
          path:"/email/send",
          element:<Emailbox />
        }
      ]
      
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    }
    
  ])
  
  return (
    <>
      <div>
        <RouterProvider router={ router } />
      </div>
        
    </>
  )
}

export default App
