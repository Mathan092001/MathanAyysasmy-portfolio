import "./style.css"
import { CgDesignmodo } from "react-icons/cg";
import ProfilePic from '../assets/My-Profile.png'
import Cloude2 from '../assets/cloude-1.png'

import { MdOutlineRocketLaunch } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegBuilding, FaChartSimple  } from "react-icons/fa6";
import { BsBarChartSteps } from "react-icons/bs";
import { SiScaleway } from "react-icons/si";


export default function About() {

    return(
        <section id="about" className="skill-section w-[100%] md:h-[100vh] h-[100%] md:flex flex-wrap items-center flex justify-center md:justify-evenly bg-slate-950 gap-5 text-gray-300 p-8 inset-0 rounded-t-[5rem]">
            <div className="profile-bg md:w-[40vw] md:h-[70vh] h-[47vh] flex justify-center items-center rounded-t-[80px] border-b-4">
                <div className="md:p-10 p-5">
                    <img src={ProfilePic} className="myprofile md:w-[24vw] w-[67vw] h-auto md:h-auto rounded-[10px]" />
                </div>
                <div className="cloude-container">
                <div className="cloude absolute md:top-[-2rem] md:right-[-7rem] right-[9rem] top-[-0.2rem]">
                    <img src={Cloude2} className="w-[12vw] md:w-[20vw] h-auto" />
                </div>
                <div className="absolute bottom-7 md:left-[-3rem] left-[-1rem]">
                    <img src={Cloude2} className="w-[25vw] md:w-[16vw] h-auto" />
                </div>
                <div className="absolute top-0 md:left-20 left-6">
                    <img src={Cloude2} className="w-[20vw] md:w-[8vw] h-auto" />
                </div>
                <div className="absolute md:top-[-0.5rem] md:left-[17rem] top-[4.5rem] right-[-1rem]">
                    <img src={Cloude2} className="w-[15vw] md:w-[5vw] h-auto" />
                </div>
                <div className="absolute md:top-[12rem] md:right-[-1.5rem] top-[1rem] right-[-1rem]">
                    <img src={Cloude2} className="w-[30vw] md:w-[5vw] h-auto" />
                </div>
                </div>
            </div>
            <div className="about flex flex-col gap-4 md:text-[1.2vw]">
            <div className="flex justify-start items-center">
            <div className="flex justify-center items-start gap-2">
                <h1 className="about-text border-t-2 border-b-2 border-blue-800 px-5 bg-black md:text-[1.8vw] text-[6vw] mb-4">My self</h1>
                <div className="sideIcon md:text-[3vw] text-[10vw] text-gray-600"><CgDesignmodo/></div>
            </div>
            </div>
            <p className="md:text-[1.3vw] select-none">
                Hi, I’m <b className="text-blue-400 hover:text-blue-500 ">Mathan Ayyasamy</b >, a front-end developer passionate about building fast, <br /> accessible, and user-friendly websites that bring ideas to life.
            </p>
            <div className="flex flex-col gap-2 select-none">
            <h2 className="font-semibold md:text-[1.4vw] text-[5.2vw]">My Core Development Strengths :</h2>
            <dl className="flex flex-col gap-3 py-2">
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <MdOutlineRocketLaunch/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                        <text className="text-pink-600">Fast & Optimized</text> – Websites built for speed and performance.
                    </div>
                    </div>
                </li>
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <FaMobileAlt/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                        <text className="text-pink-600">Responsive Design</text> – Perfect fit across mobile, tablet, and desktop.
                    </div>
                    </div>
                </li>
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <FaRegBuilding/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                        <text className="text-pink-600">Modern UI/UX</text> – Clean, attractive, and user-friendly layouts.
                    </div>
                    </div>
                </li>
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <FaChartSimple/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                        <text className="text-pink-600">Interactive Elements</text> – Smooth animations & engaging micro-interactions.
                    </div>
                    </div>
                </li>
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <BsBarChartSteps/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                        <text className="text-pink-600">Scalable & Maintainable Code</text> – Clean, reusable, and future-proof.
                    </div>
                    </div>
                </li>
                <li className="flex gap-5 md:items-center items-start">
                    <div className="md:text-[0.9vw]">
                        <GoDotFill/>
                    </div>
                    <div className="flex md:items-center items-start gap-2">
                    <div className="text-orange-500">
                        <SiScaleway/>
                    </div>
                    <div className="md:mt-0 mt-[-5px]">
                    <text className="text-pink-600">SEO-Friendly</text> – Optimized for visibility and reach.
                    </div>
                    </div>
                </li>
            </dl>
            </div>
            </div>
            
        </section>
    )
}