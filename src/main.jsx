import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Home,Account,Beauty,Clothing,Studio,Grocery,Wishlist,Bag} from './components/Index.js'


const router = createBrowserRouter([
  {
    path:'/',element:<App/>,
    children:[
      { path: '/', element: <Home /> },
      { path: '/beauty', element: <Beauty /> },
      { path: '/clothing', element: <Clothing /> },
      { path: '/studio', element: <Studio /> },
      { path: '/grocery', element: <Grocery /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/account', element: <Account /> },
      { path: '/bag', element: <Bag /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
