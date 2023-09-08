import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
