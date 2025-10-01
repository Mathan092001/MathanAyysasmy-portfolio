import './style.css';
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaInstagram, FaGithub  } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Footer() {

    return(            
        <footer className="footer w-full md:h-[25vh] h-[20vh] bg-black text-gray-300 flex justify-center items-center md:p-8 p-3 select-none">
            <div className='flex justify-between items-center md:gap-5 w-full border-t border-gray-900 md:pt-5 pt-2'>
            <div className="flex flex-col justify-start items-start md:gap-5 gap-2 opacity-90">
                <div className='flex flex-col text-gray-500'>
                <div className='flex gap-2 md:text-[2vw] text-[4vw] '>
                  <h1 >By:</h1>
                  <h1 >|Mathan Ayyasamy</h1>
                </div>
                <p className='md:text-[1vw] text-[3vw]'>Frontend Developer</p>
                </div>
                <p className="md:text-[0.8vw] text-[2vw] text-gray-500 flex md:gap-2 gap-1 items-center">© 2025 <hr className='border border-blue-800 md:h-[2vh] h-[1vh]'/> mathan_ayyasamy <hr className='border border-blue-800 md:h-[2vh] h-[1vh]'/> All rights reserved.</p>
            </div>
            <div className="flex flex-col md:gap-8 gap-4 justify-end items-end text-[5vw] md:text-[2vw] text-gray-500">
                <h1 className='md:text-[2vw] text-[4.5vw]'>Follow:</h1>
                <tbody className='flex gap-1 md:gap-4 items-center '>
                    <a href="https://www.linkedin.com/in/mathan-ayyasamy-06466a371" target="_blank" rel="noopener noreferrer"  className="linkedin hover:text-blue-600 duration-[0.2s] cursor-pointer"><FaLinkedin/></a>
                    <hr className='border border-blue-800 md:h-[2.5vh] h-[3vw]'/>
                    <a href="https://github.com/Mathan092001" target="_blank" rel="noopener noreferrer" className="github hover:text-gray-300 duration-[0.2s] "><FaGithub/></a>
                    <hr className='border border-blue-800 md:h-[2.5vh] h-[3vw]'/>
                    <a href="https://wa.me/918681916392?text=Hi!" target="_blank" rel="noopener noreferrer" className="whatsapp hover:text-green-600 duration-200"><FaWhatsappSquare/></a>
                    <hr className='border border-blue-800 md:h-[2.5vh] h-[3vw]'/>
                    <a href="https://www.instagram.com/mathanayyasamy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="insta hover:text-pink-500 duration-[0.2s] "><FaInstagram/></a>
                    <hr className='border border-blue-800 md:h-[2.5vh] h-[3vw]'/>
                    <a href="mailto:mathanayysamy@gmail.com?subject=Hello&body=Hi, I would like to connect with you." target="_blank" rel="noopener noreferrer" className="gmail hover:text-red-600 hover:bg-gray-300 duration-200 bg-gray-600 rounded-[0.2vw] md:px-1 md:py-0 md:text-[2vw] text-[5vw] px-[0.5vw] text-black"><FiMail/></a>
                </tbody>
            </div>
            </div>
        </footer>
    )
}