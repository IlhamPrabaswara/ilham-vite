import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/root'
import ErrorPage from '../error-page'
import Contact from '../pages/contact'
import About from '../pages/about'
import Blog from '../pages/blog'
import Home from '../pages/home'

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
