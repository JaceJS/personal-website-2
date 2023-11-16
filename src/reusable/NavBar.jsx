import { useState } from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const emailAddress = 'ingrit1216@gmail.com';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed bg-black w-full z-20 top-0 start-0">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-5">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-secondary self-center text-2xl md:text-3xl font-semibold font-preloader whitespace-nowrap">i n g</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href={`mailto:${emailAddress}`}>
                        <button type="button" className="bg-transparent hover:bg-secondary text-secondary hover:text-white hidden md:block border-2 hover:scale-105 duration-150 font-medium text-md md:text-lg rounded-lg px-4 py-2 text-center focus:ring-2 ring-white">
                            Email me
                        </button>
                    </a>
                    <button data-collapse-toggle="navbar-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg md:hidden hover:scale-105 duration-150 focus:outline-none focus:ring-2 focus:ring-white" aria-controls="navbar-menu" aria-expanded="false"  onClick={toggleMenu}>                    
                        {isOpen ? (
                            <div>
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="w-7 h-7"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <div>
                                <span className="sr-only">Open menu</span>
                                <svg 
                                    className="w-5 h-5" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </div>
                        )}                        
                        
                    </button>
                </div>
                <div className={`bg-transparent items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:text-xl md:w-auto md:order-1`} id="navbar-menu">
                    <ul className="flex flex-col bg-secondary md:bg-primary text-primary md:text-secondary p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            <NavLink 
                                to="/" 
                                className="block py-2 px-3 rounded hover:bg-third md:hover:bg-transparent md:hover:text-white duration-150 md:p-0" aria-current="page"
                                style={({ isActive }) => {
                                    return {                                      
                                      color: isActive ? "white" : "",
                                      backgroundColor: isActive ? "black" : "",
                                    }
                                }}
                                >Home</NavLink>
                                
                        </li>
                        <li>
                            <NavLink 
                                to="/about"
                                className="block py-2 px-3 rounded hover:bg-third md:hover:bg-transparent md:hover:text-white duration-150 md:p-0" aria-current="page"
                                style={({ isActive }) => {
                                    return {                                      
                                      color: isActive ? "white" : "",
                                      backgroundColor: isActive ? "black" : "",                                  
                                    }
                                }}
                                >About</NavLink>
                        </li>                        
                        <li>
                            <NavLink 
                                to="/contact" 
                                className="block py-2 px-3 rounded hover:bg-third md:hover:bg-transparent md:hover:text-white duration-150 md:p-0" aria-current="page"
                                style={({ isActive }) => {
                                    return {                                      
                                      color: isActive ? "white" : "",
                                      backgroundColor: isActive ? "black" : "",                                    
                                    }
                                }}
                                >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar