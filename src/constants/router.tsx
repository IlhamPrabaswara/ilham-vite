import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/Root'
import ErrorPage from '../error-page'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
])
