import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-10 text-md text-sm mb-10'>
      <NavLink className={(e)=> e.isActive ? 'text-red-300':""} to='/'>Home</NavLink>
      <NavLink className={(e)=> e.isActive ? 'text-red-300':""} to='/recipies'>Recipies</NavLink>
      <NavLink className={(e)=> e.isActive ? 'text-red-300':""} to='/about'>About</NavLink>
      <NavLink className={(e)=> e.isActive ? 'text-red-300':""} to='/create-recipies'>Create Recipies</NavLink>
    </div>
  )
}

export default Navbar
