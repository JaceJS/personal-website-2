import { motion } from 'framer-motion';

const PreLoader = () => {
  const textVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },    
  };

  return (
    <motion.div className='h-screen w-full bg-secondary text-primary flex justify-center items-center font-preloader'>
      <motion.div        
        className="text-3xl flex gap-x-4 md:gap-x-8 md:text-6xl lg:gap-x-8 lg:text-8xl"
      >
        <motion.span
            initial={{ opacity: 0.2, rotate: 0 }}      
            animate={{ opacity: 1, rotate: 360 }}
            exit= "exit"
            transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >typa</motion.span>

        <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate" 
            exit= "exit"            
            transition={{ duration: 1 }} 
        >girl</motion.span>        
        
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
