import { motion } from "framer-motion"

const Total = ({currentData}) => {
    // console.log(currentData);
    var amount_list = currentData.map(({amount})=>{return amount})
    var len = amount_list.length
    var total_sum = amount_list.reduce(function(a, b) { return a + b; }, 0);
    
    return (
        <motion.div 
        initial={{y:100}}
        animate={{y:0}}
        className = "total-big">
            <div className= "total-text">Total of {len} {len < 2 ? 'item':'items'} :</div>
            <div className= "total-amount">
                <div className= "figure">
                    ₹{len ? total_sum:"--"}
                </div>
                </div>
        </motion.div>
    )
}

export default Total;