import "./style.css"
import { RiCloseLargeLine } from "react-icons/ri";


export default function NavMenu({onCloseNav}) {

    return (
        <ul className="navbar-mobile">
            <li className="cursor-pointer text-red-900 hover:text-red-800 duration-[0.2s]"><a  onClick={onCloseNav}><RiCloseLargeLine/></a></li>
            <li className="cursor-pointer hover:text-blue-500 duration-[0.2s]"><a href="#" onClick={onCloseNav}>Home</a></li>
            <li className="cursor-pointer hover:text-blue-500 duration-[0.2s]"><a href="#about" onClick={onCloseNav}>My Self</a></li>
            <li className="cursor-pointer hover:text-blue-500 duration-[0.2s]"><a href="#skills" onClick={onCloseNav}>Skills I Have</a></li>
            <li className="cursor-pointer hover:text-blue-500 duration-[0.2s]"><a href="#projects" onClick={onCloseNav}>My Work</a></li>
            <li className="cursor-pointer hover:text-blue-500 duration-[0.2s]"><a href="#contact" onClick={onCloseNav}>Hire Me</a></li>
        </ul>
    )
}