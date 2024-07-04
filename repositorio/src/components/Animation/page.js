'use client'
import { motion } from 'framer-motion';
import styles from './styles.module.css'; // Importe o arquivo de estilos

const Animation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
  };

  const welcomeVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.1, delay: 1.6 } }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 2.0 } }
  };

  return (
    <div className={`container mx-auto h-screen flex items-center justify-center ${styles.fullHeight}`}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <motion.h1 className="text-6xl text-gray-800 font-semibold" style={{ marginBottom: '20px' }} variants={welcomeVariants}>
          Welcome
        </motion.h1>
      </motion.div>

      <motion.div variants={textVariants} initial="hidden" animate="visible" className="w-full">
        <motion.h1 className="text-6xl text-gray-800 font-semibold" style={{ marginBottom: '40px' }}>
          My name is Willian
        </motion.h1>
        <motion.h2 className="text-3xl text-gray-600" style={{ marginBottom: '155px' }}>
          Front End Developer
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Animation;
