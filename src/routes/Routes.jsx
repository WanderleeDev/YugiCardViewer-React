import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import ErrorPage from '../pages/ErrorPage/ErrorPAge'
import Profile from '../pages/Profile/Profile'
import Login from '../components/Login/Login'
import DashBoard from '../components/DashBoard/Dashboard'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/dashBoard/:id',
    element: <DashBoard/>
  },
  {
    path: '/profile',
    element: <Profile/>,
    children: [
      {
        path: "my-login",
        element: <Login/>,
      }
    ]
  }
])

const MyRoutes = () => <RouterProvider router={router}/>

export default MyRoutes
