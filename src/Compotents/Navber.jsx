import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import { auth, AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Navber = () => {
    const {user,signOutUser}=use(AuthContext);
    // console.log(user);

    const handelSignOut =()=>{
        signOutUser();
        toast("Logout successful");
    }

 



    const link = <>
    
        <li><NavLink to='/'>Home</NavLink></li>
        <li>
            {
                user ? <NavLink to='/' onClick={handelSignOut}>Logout</NavLink>:<NavLink to='/login'>Login</NavLink>
            }
        </li>
        <li><NavLink to='/register'>Registration</NavLink></li>
        <li>
            {
                user && <NavLink to='/profile'>My-Profile</NavLink>
            }
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 bg-white shadow-md z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Toy-Store</a>
  </div>
 
  <div className="navbar-end">
     <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
        {
            user &&  <div className='flex justify-center items-center gap-3'>
     <img className='h-10 object-center  w-10 rounded-full' src={user?.photoURL} alt="" />
   <h2 className='text-[20px] font-semibold]'>{user?.displayName}</h2>
 </div>
        }
  </div>
</div>
    );
};

export default Navber;