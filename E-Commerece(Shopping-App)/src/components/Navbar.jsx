import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {cart}= useSelector((state)=>state);
  return (
    <div >
        <nav className=' flex justify-between items-center h-20 max-w-6xl mx-auto  '>
            <NavLink to={"/"}>
                <div className='ml-5'>
                    <img src="../logo.png" width={200}/>
                </div>
            </NavLink>
            <div className='flex items-center mr-5 font-medium text-slate-100 space-x-6'>
                <NavLink to={"/"}>
                    <p>
                        Home
                    </p>
                </NavLink>

                <NavLink to={"/cart"}>
                <div className='relative'>
                    <IoCartSharp className='text-2xl' />
                    {
                        cart.length>0 &&
                        <span className="absolute -top-1 -right-2 bg-green-600 h-5 w-5 rounded-full animate-bounce flex justify-center items-center">
                        {cart.length}</span>
                    }
                    
                </div>
                    
                </NavLink>
            
            </div>
            

        </nav>
    </div>
  )
}

export default Navbar