import { motion } from 'framer-motion'

const AnimateButton = () => {
  return (
    <button type="button" className="text-black text-xl md:text-2xl font-semibold bg-secondary md:w-40 md:h-16 hover:scale-105 duration-150 rounded-lg text-md px-5 py-2.5 text-center inline-flex justify-center items-center relative overflow-hidden hover:border-[3px] border-third focus: hover:bg-ff94e0 hover:text-white hover:no-underline hover:shadow-btn">
        <motion.span 
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className='absolute block top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent to-white'>
        </motion.span>
        <motion.span 
            initial={{ top: '-100%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.25}}
            className='absolute block top-[-100%] right-0 w-[5px] h-full bg-gradient-to-b from-transparent to-white'>
        </motion.span>
        <motion.span 
            initial={{ right: '-100%' }}
            animate={{ right: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.5}}
            className='absolute block right-full bottom-0 w-full h-[5px] bg-gradient-to-l from-transparent to-white'>
        </motion.span>
        <motion.span 
            initial={{ bottom: '-100%' }}
            animate={{ bottom: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.75}}
            className='absolute block bottom-[-100%] left-0 w-[5px] h-full bg-gradient-to-t from-transparent to-white'>
        </motion.span>
        MORE  
        <svg className="rtl:rotate-180 w-4 md:w-6 h-4 md:h-6 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
  )
}

export default AnimateButton