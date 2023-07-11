import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/Root'
import ErrorPage from '../error-page'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Blog from '../pages/Blog'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
])
