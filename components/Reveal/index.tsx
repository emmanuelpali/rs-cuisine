'use client'
import React, {  useRef, ReactNode  } from 'react';
import styles from './index.module.css';

import { motion, useInView } from "framer-motion"

interface RevealProps {
    children: ReactNode; // Specify the type for the children prop
  }

const Reveal: React.FC<RevealProps> = ({ children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
  return (
        <motion.div className=''
         ref={ref} initial='hidden' animate={isInView ? "visible" : "hidden"}
        variants={
            {
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0}
            }}
            transition={{ duration: 0.7}}
            >
                {children}
            </motion.div>

  )
}

export default Reveal