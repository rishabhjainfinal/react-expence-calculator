import { motion,AnimatePresence } from "framer-motion";
import {useState} from 'react'

const Total = ({currentData,date}) => {
    // console.log(currentData);
    var amount_list = currentData.map(({amount})=>{return amount})
    var len = amount_list.length
    var total_sum = amount_list.reduce(function(a, b) { return a + b; }, 0);
    
    const func_care_of = () => {
        let split_date =date.split('/')
        let page_Date = parseInt(split_date[0])
        let total_ = 0;
        for (let i = 1; i < page_Date ; i++) {
            let date = i+'/'+split_date[1]+'/'+split_date[2]
            let list  = localStorage.getItem(date)
            if (list && list !== []){
                    total_ += JSON.parse(list).map(({amount})=>amount).reduce((a, b) => a + b, 0)
                } 
        }
        return total_
    };
    const care_of = func_care_of();
    const grand_total = total_sum + care_of;

    // add a toggle state to open or close
    const [tog,settog] = useState(true); 
    var classes = ["total-big",tog ? "toggle" : "untoggle"]
    return (
        <AnimatePresence>
            <motion.div 
            initial={{y:100}}
            animate={{y:0}}
            transition={{
                    duration:1,
                    type: "spring",
                    stiffness: 260,
                    damping: 15
                  }}
            onClick={()=>{settog(!tog)}}
            className = {classes.join(" ")}>
                <div className="total-cointainer">   
                    <div className= "total-text">
                        Total of {len} {len < 2 ? 'item':'items'} :
                    </div>
                    <div className= "total-amount">
                        <div className= "figure">
                            ₹{len ? total_sum:"--"}
                        </div>
                    </div>
                </div>
                <div className="total-cointainer">   
                    <div className= "total-text">
                        C/O Total  :
                    </div>
                    <div className= "total-amount">
                        <div className= "figure">
                            ₹{care_of}
                        </div>
                    </div>
                </div>
                <div className="total-cointainer">   
                <div className= "total-text">
                    Grand Total  :
                </div>
                <div className= "total-amount">
                    <div className= "figure">
                        ₹{grand_total}
                    </div>
                </div>
            </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Total;