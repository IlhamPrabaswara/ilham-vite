import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './about'
import Blog from './blog'
import Home from './home'
import Contact from './contact'

const PagesData = () => {
  const router = [
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
  ]
  return <RouterProvider router={createBrowserRouter(router)} />
}

export default PagesData
