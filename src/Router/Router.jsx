import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Root from '../Root/Root';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/About',
                element: <About></About>
            },
            {
                path:'/Contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default Router;