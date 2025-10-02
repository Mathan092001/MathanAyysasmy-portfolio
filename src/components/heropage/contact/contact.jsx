import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] =  useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [failed, setFailed] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('All fields are require to sent message.');
            setTimeout(() => {
                setError('')
            }, 3000)
            setSuccess('');
            return
        }

        const serviceId = 'service_usedqng'
        const templateId = 'template_tv5ew0a'
        const publicKey = 'Dhz-tbrYxUEnhyo0W'

        const templateParams = {
            from_name : name,
            from_email : email,
            to_name : 'Mathan Ayyasamy',
            message : message
        }

        emailjs.send(serviceId, templateId,templateParams, publicKey)
        .then((res) => {
            if (res.status === 200) {
                setSuccess('Message sent successfully');
                setTimeout(() => {
                    setSuccess('')
                }, 3000)
                setEmail('');
                setName('');
                setMessage('');
                setError('');
                setFailed('');
              } else {
                setFailed('Error while sending message!');
                setError('');
                setSuccess('');
              }
        })
        .catch(() => {
            setFailed('Error while sending message!');
            setTimeout(() => {
                setFailed('')
            },300)
            setError('');
            setSuccess('');
          });
    }

  return (
    <section id='contact' className='bg-black w-[90vw] md:max-h-[75vh] md:min-h-[50vh] max-h-[120vh] minh-[60vh] p-8 rounded-lg flex flex-col gap-2 justify-center items-center main-container'>
        <div className='flex flex-col w-full text-center  main-container'>
            <h1 className='md:text-[3vw] text-[6vw] font-semibold text-gray-400'>Get in touch</h1>
            <hr className='border-b-2 border-blue-800'/>
        </div>
        <div className='md:flex flex-wrap w-[85vw] justify-between'>
        <div className='md:p-5 p-2 md:w-[40vw] md:gap-8 flex flex-col rounded-lg'>
            <h1 className='md:text-[2vw] md:text-[1.5vw] font-semibold text-gray-500 text-center '>Reach Out</h1>
            <form className='flex flex-col text-gray-400 md:gap-3 gap-4 md:text-[1.3vw] text-[3.4vw] main-container'>
                <div className='flex flex-col '>
                    <span className='text-sky-800 font-semibold'>Name:</span>
                    <span className='border-b-2 border-gray-700 text '>Mathan Ayyasamy (Age-24)</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sky-800 font-semibold'>Address:</span>
                    <span className='border-b-2 border-gray-700 text'>Thanneerpandal, Peelamedu, Coimbatore - 641004</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sky-800 font-semibold'>Contact No:</span>
                    <span className='border-b-2 border-gray-700 text'>8681916392 / 6380256241</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sky-800 font-semibold'>Gmail:</span>
                    <span className='border-b-2 border-gray-700 text'>mathanayyasamy@gmail.com</span>
                </div>
                <div className='flex md:gap-2 flex-col'>
                    <span className='text-sky-800 font-semibold'>Social:</span>
                    <div className="flex gap-5 md:gap-5 text-[8vw] md:text-[2vw] text-gray-500 items-center min-h-[40px]">
                        <a href="https://www.linkedin.com/in/mathan-ayyasamy-06466a371" target="_blank" rel="noopener noreferrer" className="linkedIn hover:text-blue-600 duration-200"><FaLinkedin /></a>
                        <a href="https://github.com/Mathan092001" target="_blank" rel="noopener noreferrer" className="Github hover:text-gray-300 duration-200"><FaGithub /></a>
                        <a href="https://wa.me/918681916392?text=Hi!" target="_blank" rel="noopener noreferrer" className="whatsapp hover:text-green-600 duration-200"><FaWhatsappSquare /></a>
                        <a href="https://www.instagram.com/mathanayyasamy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer" className="instagram hover:text-pink-500 duration-200"><FaInstagram /></a>
                        <a href="mailto:mathanayysamy@gmail.com?subject=Hello&body=Hi, I would like to connect with you." target="_blank" rel="noopener noreferrer" className="gmail hover:text-red-600 hover:bg-gray-300 duration-200 bg-gray-600 rounded-[0.2vw] px-1 md:text-[2vw] text-[7vw] text-black"><FiMail /></a>
                    </div>
                </div>
            </form>
        </div>
        <div className='md:p-5 p-2 md:w-[40vw] gap-8 flex flex-col rounded-lg'>
            <h1 className='md:text-[2vw] font-semibold text-gray-500 text-center '>Message Me</h1>
            <form onSubmit={handleSubmit} className='flex flex-col text-gray-400 md:gap-3 gap-4 md:text-[1.3vw] text-[3.4vw] font-normal main-container'>
                <div className='flex flex-col '>
                    <span className='text-sky-800 font-semibold'>Name:</span>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Type name...' className='border-b-2 border-gray-700 text bg-black outline-none px-3 focus:border-b-2 focus:border-sky-800'/>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sky-800 font-semibold'>Email:</span>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Type Email...' className='border-b-2 border-gray-700 bg-black outline-none text px-3 focus:border-b-2 focus:border-sky-800'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-sky-800 font-semibold'>Send Message:</span>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} typeof='text' placeholder='Type message here...' className='border-2 border-gray-700 bg-black outline-none text px-3 py-2 h-[16vh] rounded-lg focus:border-2 focus:border-sky-800'></textarea>
                </div>
                { success ? 
                <div className='flex justify-center gap-1 items-center border-2 border-green-900'>
                    <p className='text-green-600 flex justify-center'>{success}</p>
                    <i className='text-gray-300 bg-green-700 p-1 rounded-full'><TiTick /></i>
                </div> : error && 
                <div className='flex gap-1 justify-center items-center border-2 border-red-950'>
                    <i className='text-red-700'><MdErrorOutline /></i>
                    <p className='text-red-700 flex justify-center'>{error}</p>
                </div> }
                <button type='submit' className='bg-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 md:py-0 py-1 '>Send Message</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Contact
