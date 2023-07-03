import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './about'
import Blog from './blog'
import Home from './home'
import Contact from './contact'
import NavBar from '@/layouts/navbar'

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
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default PagesData
