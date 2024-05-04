import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className='flex justify-between p-1'>
      <div className="">
        <h1>Favourite Games</h1>
      </div>
      <div className="flex gap-5 ">
        <Link to={'/'}>Home</Link>
        <Link to={'/all'}>All</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/bookmark'}>Bookmark</Link>
        <Link to={'/profile'}>Profile</Link>
      </div>
      <div className="">
        <input className='border-red-500 border' type="text" name="" id="" />
      </div>
    </div>
  )
}

export default Header