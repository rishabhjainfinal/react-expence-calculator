import React,{useState,useEffect} from 'react';

import NavHead from '../commonCom/nav_head';
import DataList from './components/dataList';
import AddContent from './components/add_content';
import Total from './components/total';
import { AnimatePresence, motion } from "framer-motion"

import './Day.css'

function Day({date,CP,UpdateCP}) {

    const local_store_name = date;
    const readLocalStorage = ()=>{
        // get and save data in local storage 
        let list = localStorage.getItem(local_store_name);
        // console.log(list)
        if (list && list !== "[]"){
            return JSON.parse(list)
        }
        // return [{id:1608749436527,title:"e.g. Candy" ,amount : 10}]
        return []
    }

    const [currentData,updateData] = useState(readLocalStorage());
    // savie data in local database 
    useEffect(()=>{localStorage.setItem(local_store_name,JSON.stringify(currentData))
    },[currentData,local_store_name])

    return (
        <AnimatePresence >
            <motion.div 
                initial={{ opacity: 1 }} 
                animate={{opacity: 1 }} 
                transition={{duration:0.5}} 
                exit={{opacity:0,x:100}}
                id={date}
                key={date}
                className = "Day" >
                <NavHead info={date} CP={CP} UpdateCP={UpdateCP} />
                
                {/* here we add all the boxes */}
                <DataList currentData={currentData} updateData={updateData}/>

                {/* add content to screen  */}
                <AddContent currentData={currentData} updateData={updateData}/>
                
                <Total currentData = {currentData} />
            </motion.div>
        </AnimatePresence>
    );
}

export default Day;
