import React from 'react';
import NavHead from '../commonCom/nav_head';
import MonthList from './components/MonthList';


import './Year.css'

function Month({ monthNames, CP, UpdateCP ,UpdateAM ,Save_in_excel}) {
    return (
        <>
            <NavHead info={"Today's Total"} CP={CP} UpdateCP={UpdateCP} Save_in_excel={Save_in_excel}/>
            <MonthList monthNames={monthNames} UpdateCP={UpdateCP} UpdateAM={UpdateAM}/>
        </>
    )
}

export default Month;
