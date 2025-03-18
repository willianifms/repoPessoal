// import React from "react";
// import { 
//   FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaSass, FaReact, 
//   FaNodeJs, FaGithub, FaPython, FaGitAlt, FaFigma 
// } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiPostman, SiJquery, SiPandas, SiStreamlit, SiMdnwebdocs } from "react-icons/si";
// import { BsPencilSquare } from "react-icons/bs";
// import { DiResponsive } from "react-icons/di";
// import { MdWeb } from "react-icons/md";


// const projects = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: 'https://www.instagram.com/devtech.softwares/',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     date: '99/99/9999',
//     description: 'lores gfvsbfjasbvsdbh ujshdfj vjkj  ujsedfja sbf,j ukja   ihdjkc jbjbhb   jsdhcj çlh l  lkjbcj lckjhf ssj   jkbnjch cjlbcj jgc m ljc bjdc hbb',
//     tech: ['JavaScript', 'HTML', 'CSS', 'bootstrap','JavaScript', 'HTML', 'CSS', 'bootstrap', ]
//   },

//   {
//     id: 3,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     date: '$35',
//     description: 'Black',
//     tech: []
//   },

//   {
//     id: 2,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     date: '$35',
//     description: 'Black',
//     tech: []
//   },
// ]

// const CardProject = () => {


//   const renderTechIcon = (tech) => {
//     switch (tech.toLowerCase()) {
//       case 'html':
//         return <FaHtml5 className="text-orange-500" />;
//       case 'css':
//         return <FaCss3Alt className="text-blue-500" />;
//       case 'bootstrap':
//         return <FaBootstrap className="text-purple-600" />;
//       case 'javascript':
//         return <FaJsSquare className="text-yellow-500" />;
//       case 'sass':
//         return <FaSass className="text-pink-400" />;
//       case 'react.js':
//       case 'react native':
//         return <FaReact className="text-blue-400" />;
//       case 'axios':
//         return <SiMdnwebdocs className="text-blue-600" />;
//       case 'next.js':
//         return <SiNextdotjs className="text-black" />;
//       case 'tailwind':
//         return <SiTailwindcss className="text-teal-500" />;
//       case 'figma':
//         return <FaFigma className="text-purple-400" />;
//       case 'jquery':
//         return <SiJquery className="text-blue-700" />;
//       case 'typescript':
//         return <SiTypescript className="text-blue-500" />;
//       case 'postgres':
//         return <SiPostgresql className="text-blue-500" />;
//       case 'postman':
//         return <SiPostman className="text-orange-400" />;
//       case 'node.js':
//         return <FaNodeJs className="text-green-500" />;
//       case 'git/github':
//         return <FaGithub className="text-black" />;
//       case 'api restful':
//         return <MdWeb className="text-blue-600" />;
//       case 'responsive development':
//         return <DiResponsive className="text-green-600" />;
//       case 'pwa':
//         return <SiMdnwebdocs className="text-blue-600" />;
//       case 'python':
//         return <FaPython className="text-yellow-400" />;
//       case 'pandas':
//         return <SiPandas className="text-black" />;
//       case 'matplotlib':
//         return <BsPencilSquare className="text-red-600" />;
//       case 'streamlit':
//         return <SiStreamlit className="text-pink-500" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <h2 className="text-4xl font-semibold text-center  tracking-tight text-gray-800">
//             Projects
//           </h2>
       
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-20">
//             {projects.map((product) => (
//               <a href={product.href}>
//               <div key={product.id} className="group relative">
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <img
//                     alt={product.imageAlt}
//                     src={product.imageSrc}
//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
//                       <a href={product.href}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className="mt-1 text-12xl text-gray-600 text-justify">
//                       {product.description}
//                     </p>
//                     <p className="mt-1 text-10xl text-gray-800 font-semibold">
//                     Skills
//                     </p>
//                     <div className="mt-1 flex  text-sm text-gray-500 flex-wrap " >
                    
//                       {product.tech.map((tech, index) => (
//                         <div key={index} className="flex pr-2 items-center space-x-2 ">
//                           {renderTechIcon(tech)}
//                           <span>{tech}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">
//                     {product.date}
//                   </p>
//                 </div>
//               </div>
//                </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardProject;
