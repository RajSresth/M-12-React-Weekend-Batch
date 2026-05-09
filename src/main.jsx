import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import App from './App.jsx';
import Signup from './Topic-7 Form Handling/Signup.jsx';
import NotFound from './Topic-8 React Routing/pages/NotFound.jsx';
import Home from './Topic-8 React Routing/pages/Home.jsx';
import Shop from './Topic-8 React Routing/pages/Shop.jsx';
import Profile from './Topic-8 React Routing/pages/Profile.jsx';
import ProductPage from './Topic-8 React Routing/pages/ProductPage.jsx';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"shop",
                element: <Shop/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "products/:id",   // products/69daebe6a907138b68d2a551
                element:<ProductPage/>
            }
        ]
    },
    {
        path: "/register",
        element: <Signup />
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)




