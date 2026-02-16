import { NavLink } from 'react-router-dom'

const PageNotFounded = () => {
  return (
    <div className='bg-white h-screen text-black flex items-center justify-center'>
        <div className='text-2xl capitalize font-bold p-3 h-30 flex flex-col'>
        <h1>page not founded</h1>
        <NavLink to="/"
        className=" p-1 text-center mt-4 bg-black/70  border-black/70 border-2 rounded-2xl text-white hover:bg-white hover:text-black duration-500 "
        >home page</NavLink>
        </div>
    </div>
  )
}

export default PageNotFounded