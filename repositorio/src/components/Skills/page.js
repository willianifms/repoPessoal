// components/Skills.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faBootstrap, faJs, faSass, faReact, faFigma, faJsSquare, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase, faPlug, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">My Skills</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faHtml5} className="text-orange-500" /><span>HTML</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" /><span>CSS</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faBootstrap} className="text-purple-500" /><span>Bootstrap</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faJs} className="text-yellow-500" /><span>JavaScript</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faSass} className="text-pink-500" /><span>SASS</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faReact} className="text-cyan-500" /><span>React.js</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faCloud} className="text-gray-500" /><span>Axios</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faReact} className="text-cyan-500" /><span>Next.js</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faMobileAlt} className="text-gray-700" /><span>Tailwind</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faFigma} className="text-purple-600" /><span>Figma</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faJsSquare} className="text-yellow-500" /><span>jQuery</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faJsSquare} className="text-yellow-500" /><span>TypeScript</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faDatabase} className="text-gray-500" /><span>Postgres</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faCloud} className="text-gray-500" /><span>Postman</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faNode} className="text-green-500" /><span>Node.js</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faGithub} className="text-gray-800" /><span>Git/Github</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faPlug} className="text-gray-700" /><span>Consumo de API</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faMobileAlt} className="text-gray-700" /><span>Desenvolvimento Responsivo</span></li>
        <li className="flex items-center space-x-2"><FontAwesomeIcon icon={faMobileAlt} className="text-gray-700" /><span>PWA</span></li>
      </ul>
    </div>
  );
};

export default Skills;
