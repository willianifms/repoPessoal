"use client";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 mt-auto">
            <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
        
                <div className="flex items-center">
                    <p>&copy; 2024 
                    Its the time </p>
                </div>
      

                
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <a href="https://www.instagram.com/willian_apenas/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://github.com/willianifms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/willian-cardoso-40a308253/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
