import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Header/>
        <main className='flex-1 overflow-y-auto'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayOut