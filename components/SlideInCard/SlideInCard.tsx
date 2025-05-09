import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const SlideInCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setHasLoaded(true), 100) // trigger slide on load
    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={
        hasLoaded
          ? isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -100 }
          : {}
      }
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default SlideInCard