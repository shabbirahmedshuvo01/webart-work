import React from 'react';
import navLogo from "../../images/logo-nav.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mx-20'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/service"}>Our Services</Link></li>
                            <li><Link to={"/about"}>About us</Link></li>
                            <li><Link to={"/contact"}>Contact us</Link></li>

                        </ul>
                    </div>
                    <Link className='className="btn btn-ghost text-xl"' to={"/"}><img src={navLogo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/service"}>Our Services</Link></li>
                        <li><Link to={"/about"}>About us</Link></li>
                        <li><Link to={"/contact"}>Contact us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <Link to={"/cart"}>
                        <div className="indicator btn btn-ghost btn-sm bg-slate-200  lg:mx-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-blue-400 border-none">8</span>
                        </div>
                    </Link>



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