"use client";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 mt-auto">
            <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
        
                <div className="flex items-center">
                    <p> 2024 
                    It's the time </p>
                </div>
      

                
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
