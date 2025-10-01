import './style.css'
import Project1 from '../assets/Expense Tracker.png'
import Project2 from '../assets/Dashboard-Manag Pro.png'
import Project3 from '../assets/RecipeMaker-1.png'
import Project4 from '../assets/CRUD Project.png'
import { FaArrowUp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Contact from '../contact/contact'


export default function Project() {

    return (
        <section id="projects" className="section w-[100vw] md:h-[220vh] bg-slate-950 text-white flex flex-col justify-center items-center md:gap-20 gap-10 relative bottom-0 p-8 "> 
            <div className="main-box-top flex flex-col justify-center items-center md:gap-20 md:mt-[-6vw] gap-10">
                <div className=" flex flex-col justify-center items-center text-gray-300">
                    <h2 className="mywork-text border-t-2 border-b-2 border-blue-800 px-5 bg-black md:text-[1.8vw] text-[6vw]">My Work</h2>
                </div>
                <div className='md:flex md:gap-20 flex-wrap flex gap-10 justify-center items-center'>
                    <div className='box flex flex-col md:gap-4 gap-2 items-center bg-gray-800 md:w-[30vw] w-[90vw] md:h-auto md:p-6 p-3 rounded-t-[1rem]'>
                        <div className='bg-blue-700 hover:bg-black duration-[0.9s] md:w-[27vw] md:h-[30vh] w-[80vw] h-[25vh] rounded-t-[1rem] relative flex justify-end items-end overflow-hidden'>
                            <img src={Project1} className='md:w-[22vw] w-[70vw] rounded-t-[1rem] absolute hover:scale-[1.5] duration-[0.9s] ease-in-out' alt="" />
                        </div>
                        <div className='flex justify-between items-center w-full px-1'>
                            <h1 className='border border-[2px] bg-black duration-[0.6s] select-none md:rounded-t-[0.5vw] rounded-t-[1vw] border-b-blue-600 border-t-0 border-l-0 border-r-0 md:text-[1.2vw] text-[3.5vw] px-5 text-gray-400'>Expens Tracking System</h1>
                            <div className='flex md:gap-3 gap-2 text-gray-400'>
                                <i className='p-1 bg-gray-400 text-black md:text-[1.5vw] text-[5vw] rounded-full cursor-pointer hover:bg-black hover:text-gray-300 duration-[0.9s] ease-in-out hover:rotate-90'><a href='https://expens-tracker-drab.vercel.app/' target='_blank' rel="noopener noreferrer"><FaArrowUp /></a></i>
                                <i className='p-1 bg-black rounded-full cursor-pointer md:text-[1.5vw] text-[5vw] hover:bg-gray-400 hover:text-black duration-[0.9s] ease-in-out hover:scale-[1.1]'><a href='https://github.com/Mathan092001/Expens-tracker' target='_blank' rel="noopener noreferrer"><FiGithub /></a></i>
                            </div>
                        </div>
                    </div>
                    <div className='box flex flex-col md:gap-4 gap-2 items-center bg-gray-800 md:w-[30vw] w-[90vw] md:h-auto md:p-6 p-3 rounded-t-[1rem]'>
                        <div className='bg-blue-700 hover:bg-black duration-[0.9s] md:w-[27vw] md:h-[30vh] w-[80vw] h-[25vh] rounded-t-[1rem] relative flex justify-start items-end overflow-hidden'>
                            <img src={Project2} className='md:w-[22vw] w-[70vw] rounded-t-[1rem] absolute hover:scale-[1.5] duration-[0.9s] ease-in-out' alt="" />
                        </div>
                        <div className='flex justify-between items-center w-full px-1'>
                            <h1 className='border border-[2px] bg-black duration-[0.6s] select-none md:rounded-t-[0.5vw] rounded-t-[1vw] border-b-blue-600 border-t-0 border-l-0 border-r-0 md:text-[1.2vw] text-[3.5vw] px-5 text-gray-400'>Dashboard design</h1>
                            <div className='flex md:gap-3 gap-2 text-gray-400'>
                                <i className='p-1 bg-gray-400 text-black md:text-[1.5vw] text-[5vw] rounded-full cursor-pointer hover:bg-black hover:text-gray-300 duration-[0.9s] ease-in-out hover:rotate-90'><a href='https://dashboard-two-flame-43.vercel.app/' target='_blank' rel="noopener noreferrer"><FaArrowUp /></a></i>
                                <i className='p-1 bg-black rounded-full cursor-pointer md:text-[1.5vw] text-[5vw] hover:bg-gray-400 hover:text-black duration-[0.9s] ease-in-out hover:scale-[1.1]'><a href='https://github.com/Mathan092001/new-dashboard' target='_blank' rel="noopener noreferrer"><FiGithub /></a></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex md:gap-20 flex-wrap flex gap-10 justify-center items-center'>
                    <div className='box flex flex-col md:gap-4 gap-2 items-center bg-gray-800 md:w-[30vw] w-[90vw] md:h-auto md:p-6 p-3 rounded-t-[1rem]'>
                        <div className='bg-blue-700 hover:bg-black duration-[0.9s] md:w-[27vw] md:h-[30vh] w-[80vw] h-[25vh] rounded-t-[1rem] relative flex justify-end items-end overflow-hidden'>
                            <img src={Project3} className='md:w-[22vw] w-[70vw] rounded-t-[1rem] absolute hover:scale-[1.7] duration-[0.9s] ease-in-out' alt="" />
                        </div>
                        <div className='flex justify-between items-center w-full px-1'>
                            <h1 className='border border-[2px] bg-black duration-[0.6s] select-none md:rounded-t-[0.5vw] rounded-t-[1vw] border-b-blue-600 border-t-0 border-l-0 border-r-0 md:text-[1.2vw] text-[3.5vw] px-5 text-gray-400'>Recipe Make Online</h1>
                            <div className='flex md:gap-3 gap-2 text-gray-400'>
                                <i className='p-1 bg-gray-400 text-black md:text-[1.5vw] text-[5vw] rounded-full cursor-pointer hover:bg-black hover:text-gray-300 duration-[0.9s] ease-in-out hover:rotate-90'><a href='https://recipie-make.vercel.app/' target='_blank' rel="noopener noreferrer"><FaArrowUp /></a></i>
                                <i className='p-1 bg-black rounded-full cursor-pointer md:text-[1.5vw] text-[5vw] hover:bg-gray-400 hover:text-black duration-[0.9s] ease-in-out hover:scale-[1.1]'><a href='https://github.com/Mathan092001/Recipie-Make' target='_blank' rel="noopener noreferrer"><FiGithub /></a></i>
                            </div>
                        </div>
                    </div>
                    <div className='box flex flex-col md:gap-4 gap-2 items-center bg-gray-800 md:w-[30vw] w-[90vw] md:h-auto md:p-6 p-3 rounded-t-[1rem]'>
                        <div className='bg-blue-700 hover:bg-black duration-[0.9s] md:w-[27vw] md:h-[30vh] w-[80vw] h-[25vh] rounded-t-[1rem] relative flex justify-start items-end overflow-hidden'>
                            <img src={Project4} className='md:w-[23vw] w-[70vw] rounded-t-[1rem] absolute hover:scale-[1.7] duration-[0.9s] ease-in-out' alt="" />
                        </div>
                        <div className='flex justify-between items-center w-full px-1'>
                            <h1 className='border border-[2px] bg-black duration-[0.6s] select-none md:rounded-t-[0.5vw] rounded-t-[1vw] border-b-blue-600 border-t-0 border-l-0 border-r-0 md:text-[1.2vw] text-[3.5vw] px-5 text-gray-400'>CRUD - EMP Payroll</h1>
                            <div className='flex md:gap-3 gap-2 text-gray-400'>
                                <i className='p-1 bg-gray-400 text-black md:text-[1.5vw] text-[5vw] rounded-full cursor-pointer hover:bg-black hover:text-gray-300 duration-[0.9s] ease-in-out hover:rotate-90'><a href='https://crud-employee-payroll.vercel.app/' target='_blank' rel='noopener noreferrer'><FaArrowUp /></a></i>
                                <i className='p-1 bg-black rounded-full cursor-pointer md:text-[1.5vw] text-[5vw] hover:bg-gray-400 hover:text-black duration-[0.9s] ease-in-out hover:scale-[1.1]'><a href='https://github.com/Mathan092001/crud-new' target='_blank' rel='noopener noreferrer'><FiGithub /></a></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <div className='name absolute md:mb-[-1.5vw] bottom-0 mb-[-1.7vw] font-bold text-blue-800 md:text-[5vw] text-[5.3vw] w-full text-center tracking-widest select-none'>
                <h1>MATHAN AYYASAMY</h1>
            </div>
        </section>
    )
}