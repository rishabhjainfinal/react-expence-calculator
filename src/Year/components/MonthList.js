import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from 'react-router-dom'

const MonthList = ({monthNames,UpdateCP,UpdateAM}) => {
    let history = useHistory();

    const container = {
        hidden: { opacity: 1},
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.1 ,
            staggerChildren: 0.02
          }
        }
      };
      
    const item = {
    hidden: { y: 20, opacity: 0 ,scale:2},
    visible: {
        y: 0,
        opacity: 1,
        scale:1
    }
    };
    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="cointainer">
            <AnimatePresence >
                {monthNames.map((name, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={item}
                            onClick={()=>{
                                // undate current month and possition 
                                UpdateCP("Month")
                                UpdateAM(name)
                                let path = `/month`;
                                history.push(path);
                            }}
                            className={monthNames[new Date().getUTCMonth()] === name ? "month-box current" :"month-box"}>
                                {name}
                            </motion.div>
                        )
                })
                }
            </AnimatePresence>
        </motion.div >
    )
}

export default MonthList ;
