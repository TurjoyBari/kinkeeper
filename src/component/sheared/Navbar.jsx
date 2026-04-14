import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from "../../assets/logo.png"
import { HiOutlineChartBar, HiOutlineClock, HiOutlineHome } from 'react-icons/hi';



const navItems = [
  { to: '/',         label: 'Home',     Icon: HiOutlineHome    },
  { to: '/timeline', label: 'Timeline', Icon: HiOutlineClock   },
  { to: '/stats',    label: 'Stats',    Icon: HiOutlineChartBar },
]

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300'>
            <div className="navbar bg-base-100 max-w-11/12 mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/timeline"}>TimeLine</Link>
                    </li>
                    <li>
                        <Link to={"/stats"}>Stats</Link>
                    </li>

                  </ul>
                </div>
                <img src= {Logo} alt="" />
              </div>

              <div className="navbar-center hidden lg:flex">
                {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#244D3F]/25 text-[#244D3F] font-semibold'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-base-200'
                  }`
                }
              >
                <Icon className="text-base" />
                {label}
              </NavLink>
            ))}
              </div>
            </div>
        </header>
    );
};

export default Navbar;