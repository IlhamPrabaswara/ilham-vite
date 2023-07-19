import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/root'
import ErrorPage from '../error-page'
import Home from '../pages/home'
import About from '../pages/about'
import Blog from '../pages/blog'
import Contact from '../pages/contact'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])
