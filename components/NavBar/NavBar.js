import React from 'react'
import  Link  from 'next/link';
const NavBar = () => {
  return (
    <div>   <nav className="flex z-50  text-inherit   flex-row justify-center   w-full shadow-lg  NavBar  shadow-blue-500      bg-inherit" >
    <div className='text-center  my-auto ml-2  justify-center flex'>
        <li className='list-none text-center items-center m-auto justify-center flex font-semibold  font-serif text-inherit text-lg'><Link href='/'>Login Component</Link></li>
    </div>
    <ul className= "flex flex-row justify-end m-auto  my-5 z-50 Nav-ul">
        <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/'>Login</Link></li>
        <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/register'>Register</Link></li>
        <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/blogs'>Login with Google</Link></li>
        <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/contact'>Login with Facebook</Link></li>
    </ul> </nav> </div>
  )
}

export default NavBar