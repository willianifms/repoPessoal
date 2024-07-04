// components/Skills.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaSass, FaReact, FaFigma, FaNode, FaGithub } from 'react-icons/fa';
import { SiAxios, SiNextdotjs, SiTailwindcss, SiJquery, SiTypescript, SiPostgresql, SiPostman,SiPwa } from 'react-icons/si';
import { GrCloudComputer } from 'react-icons/gr';
import { TbBrandReactNative } from "react-icons/tb";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  const iconStyle = "text-3xl sm:text-4xl"; // Estilo para os ícones

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">My Skills</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <li className="flex flex-col items-center space-y-2"><FaHtml5 className={iconStyle + " text-orange-500"} /><span>HTML</span></li>
        <li className="flex flex-col items-center space-y-2"><FaCss3Alt className={iconStyle + " text-blue-500"} /><span>CSS</span></li>
        <li className="flex flex-col items-center space-y-2"><FaBootstrap className={iconStyle + " text-purple-500"} /><span>Bootstrap</span></li>
        <li className="flex flex-col items-center space-y-2"><FaJs className={iconStyle + " text-yellow-500"} /><span>JavaScript</span></li>
        <li className="flex flex-col items-center space-y-2"><FaSass className={iconStyle + " text-pink-500"} /><span>SASS</span></li>
        <li className="flex flex-col items-center space-y-2"><FaReact className={iconStyle + " text-cyan-500"} /><span>React.js</span></li>
        <li className="flex flex-col items-center space-y-2"><TbBrandReactNative className={iconStyle + " text-cyan-500"} /><span>React Native</span></li>
        <li className="flex flex-col items-center space-y-2"><SiAxios className={iconStyle + " text-red-500"} /><span>Axios</span></li>
        <li className="flex flex-col items-center space-y-2"><SiNextdotjs className={iconStyle + " text-black-500"} /><span>Next.js</span></li>
        <li className="flex flex-col items-center space-y-2"><SiTailwindcss className={iconStyle + " text-cyan-400"} /><span>Tailwind</span></li>
        <li className="flex flex-col items-center space-y-2"><FaFigma className={iconStyle + " text-purple-600"} /><span>Figma</span></li>
        <li className="flex flex-col items-center space-y-2"><SiJquery className={iconStyle + " text-cyan-700"} /><span>jQuery</span></li>
        <li className="flex flex-col items-center space-y-2"><SiTypescript className={iconStyle + " text-blue-700"} /><span>TypeScript</span></li>
        <li className="flex flex-col items-center space-y-2"><BiLogoPostgresql className={iconStyle + " text-cyan-800"} /><span>Postgres</span></li>
        <li className="flex flex-col items-center space-y-2"><SiPostman className={iconStyle + " text-orange-400"} /><span>Postman</span></li>
        <li className="flex flex-col items-center space-y-2"><FaNode className={iconStyle + " text-green-500"} /><span>Node.js</span></li>
        <li className="flex flex-col items-center space-y-2"><FaGithub className={iconStyle + " text-gray-800"} /><span>Git/Github</span></li>
        <li className="flex flex-col items-center space-y-2"><GrCloudComputer className={iconStyle + " text-gray-700"} /><span>API Restfull</span></li>
        <li className="flex flex-col items-center space-y-2"><LuMonitorSmartphone className={iconStyle + " text-black-700"} /><span>Desenvolvimento Responsivo</span></li>
        <li className="flex flex-col items-center space-y-2"><SiPwa className={iconStyle + " text-purple-700"} /><span>PWA</span></li>
      </ul>
    </div>
  );
};

export default Skills;
