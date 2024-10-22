"use client";
import {motion} from "framer-motion"
import startsBg from "@/assets/stars.png";

export default function SwapLayout({children}:{children:React.ReactNode}){
  return (
    <motion.body
    style={{
      backgroundImage: `url(${startsBg.src})`,
    }}
    animate={{
      backgroundPositionX:startsBg.width,
    }}
    transition={{
      repeat:Infinity,
      duration:70,
      ease:"linear",
    }}
    >
        {children}
    </motion.body>
  )
}