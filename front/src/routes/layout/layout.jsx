import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'
import { GlobalContext } from '../../context'
import './layout.css'

export const Layout = () => {

  return (
    <GlobalContext>
      <Header/>
        <Outlet/>
      <Footer/>
    </GlobalContext>
  )
}