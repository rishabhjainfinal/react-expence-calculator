import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';
import {GrSave} from 'react-icons/gr';


const nav_head = ({info,CP,UpdateCP,Save_in_excel}) => {
    const back_url = `${CP === "Month"? "/year" : "/month" }` ;
    const forword_url =  `${CP === "Month"? "/day" : "/month" }`;
    // console.log(back_url)
    // console.log(forword_url)
    info = info.replaceAll('/',' ')

    return (
        < motion.div 
        initial={{y:-100}}
        animate={{y:0}} >
        <nav className = "nav-head" >
            {CP !== "Year" ? 
            <motion.div 
                initial={{opacity:0,scale:2}}
                animate={{opacity:1,scale:1}}
                transition={{delay:0.2}}
                onClick={()=>{
                    //update the current possition 
                    if (CP === "Day"){
                        UpdateCP('Month')
                    }
                    else if (CP === "Month"){
                        UpdateCP('Year')
                    }
                }}
                className="back-button"><Link to={back_url}><IoIosArrowBack/></Link></motion.div>
                :
                <div className="back-button" onClick={()=>{Save_in_excel()}}><GrSave/></div>
            }
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.1}}
                className = "center nav-text">
                {info}
            </motion.p>
            {CP !== "Day" ?
            <motion.div
                initial={{opacity:0,scale:2}}
                animate={{opacity:1,scale:1}}
                transition={{delay:0.2}}
                onClick={()=>{
                    //update the current possition 
                    if (CP === "Year"){
                        UpdateCP('Month')
                    }
                    else if (CP === "Month"){
                        UpdateCP('Day')
                    }
                }}
                className="forword-button">
                <Link to={forword_url}>
                    <IoIosArrowForward/>
                </Link>
                </motion.div>
                :
                <div></div>
            }
        </nav>
        </motion.div>
    )
};

export default nav_head;