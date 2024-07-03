"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
<>
    <header>
    
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Imagem à esquerda */}
        <div className="flex items-center">
          <Image src="/myFace.jpeg" alt="Logo" width={50} height={50} className="rounded-full"/>
        </div>
        {/* Menu hamburguer */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Opções centralizadas */}
        <div className={`lg:flex lg:items-center lg:w-auto w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-8 lg:space-y-0 space-y-4 lg:flex-row flex flex-col items-center pt-4 lg:pt-0">
            <li>
              <Link href="/">
                <p className="text-white hover:text-gray-400 cursor-pointer">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-white hover:text-gray-400 cursor-pointer">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="text-white hover:text-gray-400 cursor-pointer">Contact</p>
              </Link>
            </li>
            <li>
            <div className={`lg:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} lg:block`}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
            </li>
          </ul>
        </div>
        {/* Redes sociais à direita */}
        
      </div>
    </nav>
    </header>


</>
    )
}

export default Header;