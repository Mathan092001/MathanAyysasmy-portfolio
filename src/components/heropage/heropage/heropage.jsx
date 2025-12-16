import "./style.css"
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsappSquare  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CgTapDouble } from "react-icons/cg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function HeroPage(){

    useEffect(() => {
        const scroll = ScrollReveal({
            distance: '60px',
            duration: 2000,
            delay: 300,
            reset: false,
            opacity: 0,
        });
        scroll.reveal('.header-name', {origin: 'top', opacity: 0, delay: 500})
        scroll.reveal('.hero-botton-text', {origin: 'top', delay: 1000})
    }, [])

    return (
        <>
        <section id="home" className="heropage w-[100%] h-[100%] md:h-[75vh] flex flex-col justify-start items-center backdrop-blur-[3px]  relative md:p-0 p-3 ">
            <div className="flex flex-col justify-center items-center md:mt-[-5rem] mt-[-2rem] text-gray-200 md:gap-24 gap-12">
                <div className="flex flex-col justify-evenly items-center header-name">
                   <h1 className="title md:text-[5vw] text-[5.5vw] tracking-wide select-none">MATHAN AYYASAMY</h1>
                   <h3 className="role md:text-[2vw] text-gray-500 select-none">Software Engineer</h3>
                </div>
                <div className="hero-text flex flex-col gap-5 md:gap-10 justify-center items-center hero-botton-text">
                   <div className="para flex text-[3.5vw] md:text-[2vw] p-1 text-center gap-3 select-none">
                       <p className="intro-text">Crafting </p>
                      <div className="roles-container md:h-[50px] h-[20px] md:text-[2vw] text-[3.8vw]">
                        <span className="roles">Modern,</span>
                        <span className="roles">Responsive,</span>
                        <span className="roles">& Engaging</span>
                      </div>
                       <p className="intro-text">Web Experiences</p>
                   </div>
                    <div className="box-text flex gap-5 md:gap-6">
                        <a href="https://pink-anthea-82.tiiny.site" target="_blank" rel="noopener noreferrer" className="cv md:border-2 border-[1px] border-blue-700 text-gray-300 hover:border-black hover:bg-gray-300 hover:text-black px-2 py-1 text-[2.8vw] md:px-5 md:py-1 duration-[0.1s] ease-in-out rounded-[0.1vw] md:text-[1.2vw] ">My Profile</a>
                        <a href="#contact" className="cv md:border-2 border-[1px] border-blue-700 text-gray-300 hover:border-black hover:bg-gray-300 hover:text-black px-2 py-1 text-[2.8vw] md:px-5 md:py-1 duration-[0.1s] ease-in-out rounded-[0.1vw] md:text-[1.2vw]">Get in touch</a>
                    </div>
                    <div className="flex gap-5 md:gap-10 text-[8vw] md:text-[2.2vw] text-gray-500 items-center min-h-[40px]">
                        <a href="https://www.linkedin.com/in/mathan-ayyasamy-06466a371" target="_blank" rel="noopener noreferrer" className="linkedIn hover:text-blue-600 duration-200"><FaLinkedin /></a>
                        <a href="https://github.com/Mathan092001" target="_blank" rel="noopener noreferrer" className="Github hover:text-gray-300 duration-200"><FaGithub /></a>
                        <a href="https://wa.me/918681916392?text=Hi!" target="_blank" rel="noopener noreferrer" className="whatsapp hover:text-green-600 duration-200"><FaWhatsappSquare /></a>
                        <a href="https://www.instagram.com/mathanayyasamy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="instagram hover:text-pink-500 duration-200"><FaInstagram /></a>
                        <a href="mailto:mathanayysamy@gmail.com?subject=Hello&body=Hi, I would like to connect with you." target="_blank" rel="noopener noreferrer" className="gmail hover:text-red-600 hover:bg-gray-300 duration-200 bg-gray-500 rounded-[0.3vw] px-1 md:text-[2vw] text-[7vw] text-black"><FiMail /></a>
                    </div>
                </div>
                <div className="scroll flex flex-col justify-center items-center md:text-[1.2vw] text-[3vw] text-zinc-500 font-semibold">
                    <span ><CgTapDouble/></span>
                    <span className="md:text-[0.9vw] text-[2.5vw] text-zinc-700">Scroll</span>
                </div>
            </div>
        </section>
     </>
    );
};