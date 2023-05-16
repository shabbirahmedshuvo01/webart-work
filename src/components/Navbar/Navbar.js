import React from 'react';
import navLogo from "../../images/logo-nav.png";

const Navbar = () => {
    return (
        <div className='mx-20'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Our Services</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={navLogo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Our Services</a></li>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <div class="indicator btn btn-ghost btn-sm bg-slate-200  lg:mx-12">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>


                    <div className='mx-5'>
                        <button className='btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none border border-white'>Log In</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;