import React from 'react';
import Tile from './tile';
import { motion,AnimatePresence } from "framer-motion";
import { VscArrowDown } from "react-icons/vsc";



const DataList = ({currentData,updateData}) => {
    if (currentData != null && currentData.length === 0 ){
        return (
            <AnimatePresence>
                <motion.div
                initial={{opacity:0,scale:0.7}}
                animate={{opacity:0.8,scale:1}}
                transition={{
                    duration:1,
                    type: "spring",
                    stiffness: 260,
                    damping: 50
                  }}
                exit={{opacity:0,scale:1}}
                className="no-tile-cointainer">
                    <h1 className="nodata">There is nothing here yet.</h1>
                    <h1 className="nodata">😉</h1>
                    <h1 className="nodata">...</h1>
                    <h1 className="nodata">&nbsp;</h1>
                    <h1 className="nodata">&nbsp;</h1>
                    <h1 className="nodata">&nbsp;</h1>
                    <h1 className="nodata">&nbsp;</h1>
                    <h1 className="nodata">Add From here.</h1>
                    <h1 className="nodata" style={{fontSize:"5em"}}><VscArrowDown/></h1>
                </motion.div>
            </AnimatePresence>

        )   
    }
    else{
        return (
            <motion.div transition={{type: "spring "}} className="tile-cointainer">
                <AnimatePresence >
                    {currentData.map(({id,title,amount},index) => {
                        return (
                            <motion.div 
                            initial={{opacity: 0,y:200 }}
                            animate={{opacity: 1,y: 0}}
                            exit={{opacity:0,rotateX: 180}}
                            transition={{type:"spring",
                                        duration: 0.3,
                                        delay:0.01*index}}
                            whileTap={{scale:1.01}}
                            key={id*2}>
                                <Tile key={id} id={id} title={title} amount={amount} count={index} currentData={currentData} updateData={updateData} />
                            </motion.div>
                            )
                    })
                }
                </AnimatePresence>
            </motion.div >
    )
}}

export default DataList;
