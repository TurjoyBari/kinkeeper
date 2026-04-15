import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/homepage/HomePage'
import TimeLinePage from './pages/timelinepage/TimeLinePage'
import StatsPage from './pages/statspage/StatsPage'
import ErrorPage from './pages/errorpage/ErrorPage'
import FriendDetails from './pages/FriendDetails/FriendDetails'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/:id",
        element: <FriendDetails/>
      },
      {
        path:"/timeline",
        element: <TimeLinePage/>
      },
      {
        path: "/stats",
        element: <StatsPage/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
