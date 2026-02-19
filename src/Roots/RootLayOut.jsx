import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col'>
      <header className='h-16'>
        <Header/>
        </header>
        <main className='flex-1 '>
        <Outlet/>
        </main>
        <footer className=' hidden lg:block h-16'>
        <Footer/>
        </footer>
    </div>
  )
}

export default RootLayOut