import React from 'react';
import NavHead from '../commonCom/nav_head';
import DayList from './components/DayList';

import './Month.css'

function Month({month,CP,UpdateCP,UpdateAD,AM,AY,monthNames}) {
    // extract index of month name
    const days = new Date(2020, monthNames.indexOf(Month) + 1, 0).getDate() 
    return (
            <div> 
            <NavHead info={month} CP={CP} UpdateCP={UpdateCP} />
            <DayList day_count={days} UpdateCP={UpdateCP} UpdateAD={UpdateAD} AM={AM} AY={AY} workingMonth={monthNames.indexOf(AM)}/>
            </div>
    );
}

export default Month;
