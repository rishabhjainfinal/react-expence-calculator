import React,{useState} from 'react';
import {GrClose} from 'react-icons/gr';
import { motion,AnimatePresence } from "framer-motion";

const Add_content = ({currentData,updateData}) =>{
    const [isAddingContent,setAddingContent] = useState(false);   
    
    // to show or hide the input box
    const clicked = () =>{setAddingContent(!isAddingContent);}

    // form input handler
    const handelSubmit = (e)=>{
        e.preventDefault();

        // show zero or empty of nulldata
        var entry = {id : parseInt(new Date().getTime().toString()),
                       title: e.target[0].value !== "" ? e.target[0].value : "No Title 😁",
                       amount: parseInt(e.target[1].value) | 0
                    };
        
        // update database
        updateData([...currentData,entry]);
        clicked();

        // move to bottom of page
    }

    const confirmClick = (event,info)=>{
        var clinkdata = event.target.tagName;
        if (clinkdata === "DIV" ){
            clicked()
        }
    }

    // update the local database 
    if (!isAddingContent){
        return (
            <AnimatePresence>               
                <motion.div 
                    initial={{y:150}}
                    animate={{y:0}}
                    transition={{delay:0.05}}
                    exit={{y:-250,opacity:0}}
                    key="newEnteryButton"
                    className="add-content-parent">
                        <button className = "add-content-btn"
                        onClick = {clicked}>
                            Add new Entry.            
                        </button> 
                </motion.div>
            </AnimatePresence>

        )
    }
    else{
        // input fields appears
        return (
            <AnimatePresence>
                <motion.div 
                className="form-parent" 
                onClick={confirmClick}>
                    <motion.form
                    className="new-entry-box" 
                    initial={{y:300,opacity:0}} 
                    animate={{y:0,opacity:1}} 
                    transition={{delay:0.05}}
                    exit={{opacity:0,y:400}}
                    onSubmit = {handelSubmit}>
                        <motion.div 
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}
                        className="close-button"
                        onClick={clicked}>
                            {<GrClose/>}
                        </motion.div>
                        <label className="label" htmlFor="title">Title :</label>
                        <input className="input" id="title" placeholder="e.g. Milk."/>
                        <label className="label" htmlFor="anount">Amount :</label>
                        <input className="input" id="anount" type="number" placeholder="150"/>
                        <input className="submit-btn" type="submit" value="Add" />
                    </motion.form>
                </motion.div>
            </AnimatePresence>
            
        )
    }
}

export default Add_content;
