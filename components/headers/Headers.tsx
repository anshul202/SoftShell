
import { motion } from 'framer-motion'
interface props{
    title:string;
    size:string;
    delay:number;
}

export default function Headers({title,size,delay}:props) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: delay,
        ease: [0.2, 0.8, 0.2, 1]
      }}
      style={{
        color: 'white',
        backgroundColor: '#1062fe',
        padding: '20px 40px',
        fontSize: `${size}`+'px',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '8px'
      }}
    >
     {title}
    </motion.h1>
  )
}
