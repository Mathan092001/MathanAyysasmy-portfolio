import './style.css';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub,   } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill  } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import ReactIcon from '../assets/react-icons.svg'
import VitejsICON from '../assets/Vite.js.png'


export default function Skills() {
    return ( 
        <section id="skills" className="skill-section w-[100vw] md:gap-10 gap-5 md:h-[100vh] h-[100%] bg-slate-950 text-white flex flex-col justify-center items-center p-8 select-none"> 
            <h1 className="skill-text border-b-2 border-t-2 border-blue-800 px-5 md:text-[1.8vw] text-gray-300 text-[6vw] bg-black">Skills I Have</h1>
            <div className="flex flex-col justify-center items-center ">
                <div className="skills-heading flex flex-col justify-center items-center text-gray-300">
                   <h2 className="md:text-[1.5vw] font-[700] text-gray-500 text-[5vw]">Core Web</h2>
                </div>
                <div className=" md:max-w-[60vw] max-w-[90vw]">
                    <ul className="tag-list md:text-[8vw] text-[16vw] md:gap-[1.5rem] gap-2 flex">
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-orange-600 md:px-3 md:py-2 px-2 py-1"><FaHtml5 className='hover:scale-110 duration-500 ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>HTML</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-blue-500 md:px-3 md:py-2 px-2 py-1"><FaCss3Alt className='hover:scale-110 duration-500 ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>CSS</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <li className="text-yellow-400 md:px-3 md:py-2 px-2 py-1"><RiJavascriptFill className='hover:scale-110 duration-500 ease-in-out'/></li>
                            <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>JavaScript</h2>
                        </div>
                        
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="skills-heading flex flex-col justify-center items-center text-gray-300">
                   <h2 className="md:text-[1.5vw] font-[700] text-gray-500 text-[5vw]">Framework & Libraries</h2>
                </div>
                <div className=" md:max-w-[60vw] max-w-[90vw]">
                    <ul className="tag-list md:text-[8vw] text-[16vw] md:gap-[1.5rem] gap-2 flex">
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-sky-400 md:px-3 md:py-2 px-2 py-1"><FaReact className='hover:rotate-90 duration-[1s] ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>React JS</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-blue-700 md:text-[8vw] md:px-3 md:py-2 px-2 py-1"><DiJqueryLogo className='hover:scale-110 duration-500 ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>JQery</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <li className="text-blue-500 md:px-3 md:py-2 px-2 py-1"><RiTailwindCssFill className='hover:scale-110 duration-500 ease-in-out'/></li>
                            <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>Tailwind CSS</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <li className="text-purple-700 md:px-3 md:py-2 px-2 py-1"><FaBootstrap className='hover:scale-110 duration-500 ease-in-out'/></li>
                            <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>Bootstrap</h2>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-col justify-center items-center text-gray-300">
                   <h2 className="md:text-[1.5vw] font-[700] text-gray-500 text-[5vw]">Version Controll, Tools & Icons</h2>
                </div>
                <div className=" md:max-w-[60vw] max-w-[90vw]">
                    <ul className="tag-list md:text-[8vw] text-[16vw] md:gap-[1.5rem] gap-2 flex">
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-gray-300 md:px-3 md:py-2 px-2 py-1"><FaGithub className='hover:scale-110 duration-500 ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>GitHub</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-gray-300 md:px-3 md:py-2 px-2 py-1"><img src={VitejsICON} alt='Vite-Icon' className='md:w-[8vw] w-[16vw] hover:scale-110 duration-500 ease-in-out'/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>Vite.JS</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                           <li className="text-red-500 md:px-3 md:py-2 px-2 py-1"><img src={ReactIcon} alt='Vite-Icon' className='md:w-[8vw] w-[16vw] hover:rotate-90 duration-[1s] ease-in-out '/></li>
                           <h2 className='md:text-[1vw] text-[3vw] font-semibold text-gray-400'>React Icons</h2>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}