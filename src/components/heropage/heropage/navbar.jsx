import { useState } from "react";
import NavMenu from "../navmenu/navmenu";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import "./style.css"

export default function Navbar() {

    const [togglenav, setToggleNave] = useState(false);

    const [navPosition, setNavPosition] = useState('Home')

    return(
        <>
        <div className="bg-black md:bg-opacity-30 bg-opacity-50 fixed w-[100vw] top-0 left-0 z-10">
           <div className="full-nav ">
                <nav className="md:flex flex flex-col items-center text-gray-200 justify-center md:justify-center p-8 ">
                    <line className="line"></line>
                    <div className="flex justify-center">
                        <ul className="navbar ">
                            <li><a href="#"><img className="w-[45px] h-auto cursor-pointer" src={Logo} /></a></li>
                            <div onClick={() => setNavPosition('Home')} className="relative">
                            { navPosition === 'Home' ? <li className="cursor-pointer text-sky-500 duration-[0.2s]"><a href="#">Home</a></li> : <li className="cursor-pointer hover:text-blue-500 hover:scale-[1.2] duration-[0.6s] ease-in-out"><a href="#">Home</a></li> }
                            { navPosition === 'Home' && 
                                <div className="flex justify-center relative items-center">
                                    <hr className="highlight-1 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mt-[1.8vw]" /> 
                                    <hr className="highlight-2 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mb-[4.7vw]" />
                                </div> }
                            </div> 
                            <div onClick={() => setNavPosition('My Self')} className="relative">
                            { navPosition === 'My Self' ? <li className="cursor-pointer text-sky-500 duration-[0.2s]"><a href="#about">My Self</a></li> : <li className="cursor-pointer hover:text-blue-500 hover:scale-[1.2] duration-[0.6s] ease-in-out"><a href="#about">My Self</a></li> }
                            { navPosition === 'My Self' && 
                                <div className="flex justify-center relative items-center">
                                    <hr className="highlight-1 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mt-[1.8vw]" /> 
                                    <hr className="highlight-2 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mb-[4.7vw]" />
                                </div> }
                            </div>
                            <div onClick={() => setNavPosition('Skills I Have')} className="relative">
                            { navPosition === 'Skills I Have' ? <li className="cursor-pointer text-sky-500 duration-[0.2s]"><a href="#skills">Skills I Have</a></li> : <li className="cursor-pointer hover:text-blue-500 hover:scale-[1.2] duration-[0.6s] ease-in-out"><a href="#skills">Skills I Have</a></li> }
                            { navPosition === 'Skills I Have' && 
                                <div className="flex justify-center relative items-center">
                                    <hr className="highlight-1 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mt-[1.8vw]" /> 
                                    <hr className="highlight-2 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mb-[4.7vw]" />
                                </div> }
                            </div>
                            <div onClick={() => setNavPosition('My Work')} className="relative">
                            { navPosition === 'My Work' ? <li className="cursor-pointer text-sky-500 duration-[0.2s]"><a href="#projects">My Work</a></li> : <li className="cursor-pointer hover:text-blue-500 hover:scale-[1.2] duration-[0.6s] ease-in-out"><a href="#projects">My Work</a></li> }
                            { navPosition === 'My Work' && 
                                <div className="flex justify-center relative items-center">
                                    <hr className="highlight-1 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mt-[1.8vw]" /> 
                                    <hr className="highlight-2 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mb-[4.7vw]" />
                                </div> }
                            </div>
                            <div onClick={() => setNavPosition('Hire Me')} className="relative">
                               { navPosition === 'Hire Me' ? <li className="cursor-pointer text-sky-500 duration-[0.2s]"><a href="#contact">Hire Me</a></li> : <li className="cursor-pointer hover:text-blue-500 hover:scale-[1.2] duration-[0.6s] ease-in-out"><a href="#contact">Hire Me</a></li> }
                                { navPosition === 'Hire Me' && 
                                <div className="flex justify-center relative items-center">
                                    <hr className="highlight-1 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mt-[1.8vw]" /> 
                                    <hr className="highlight-2 absolute w-[6.5vw] border-b-[0.1vw] border-sky-600 mb-[4.7vw]" />
                                </div> }
                            </div>
                        </ul>
                        <div className="flex justify-center items-center justify-between px-7 md:hidden w-[72vw] rounded-full bg-black bg-opacity-60">
                            <a href="#"><img className="w-[13vw] h-auto cursor-pointer" src={Logo} /></a>
                            <button onClick={() => setToggleNave(true)} className="md:hidden text-gray-400 block text-[10vw] font-semibold"><FaBars /></button>
                        </div>
                    </div>
                    <line className="line2"></line>
                </nav>
            </div>
        </div>
        
            <div className="flex justify-center items-center mt-[-3rem] md:mt-[-2rem]"><line className="line3 md:w-[80vw] md:h-[15vh] w-[150vw] h-[6vh]"></line></div>
            <div>
                {togglenav && <NavMenu onCloseNav={() => setToggleNave(false)} />}
            </div>
        </>
    )
}