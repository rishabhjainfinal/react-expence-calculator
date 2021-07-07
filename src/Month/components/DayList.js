import React from 'react';
import { motion,AnimatePresence} from "framer-motion";
import { useHistory } from 'react-router-dom'

function DayList({day_count,UpdateCP,UpdateAD,AM,AY,workingMonth}){
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
        hidden: { y: 20, opacity: 0 ,scale:1.2},
        visible: {y: 0,opacity: 1,scale:1}
    };
    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="month-cointainer">
            <AnimatePresence>
                {[...Array(day_count)].map((e,index)=>{
                    return (
                        <motion.div
                            key={index}
                            variants={item}
                            whileTap={{ scale: 0.9 }}
                            onClick={()=>{
                                UpdateAD((index+1)+'/'+AM+'/'+AY)
                                UpdateCP("Day")
                                let path = `/day`;
                                history.push(path);
                            }}
                            className={new Date().getDate() === index+1 && new Date().getMonth() === workingMonth ? "day-box current" :"day-box"}>
                                {index + 1}
                            </motion.div>
                        )
                })}
                </AnimatePresence>
        </motion.div >
        )
}

export default DayList;