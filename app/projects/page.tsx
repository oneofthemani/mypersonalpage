
'use client'; 

import { motion } from "motion/react"

export default function Page() {

    return (
        <>
            <div >
        <motion.p initial={{ opacity: 0, scale: 0}}
                  animate={{ opacity: 1, scale: 1}}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.5,
                }}>
                    Ready for your next flight?
        </motion.p>    
        </div>
        </>
    )
}