import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/root'
import ErrorPage from '../error-page'
import Home from '../pages/home'
import About from '../pages/about'
import Blog from '../pages/blog'
import Contact from '../pages/contact'
import BlogPost from '../pages/blog/[slug]'
import { supabase } from '../utils/supabaseClient'

const blogLoader = async ({ params }: any) => {
  return supabase.from('blog-posts').select().eq('slug', `${params.id}`)
}

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
        path: '/blog/:id',
        element: <BlogPost />,
        loader: blogLoader,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])
