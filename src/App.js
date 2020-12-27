import React,{useState} from 'react';
import Day from './day/Day'
import Month from './Month/Month'
import Year from './Year/Year'

import './App.css';


function App() {
    // current possition [day,month,year]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [CP,UpdateCP] = useState('Month');
    // const [AY,UpdateAY] = useState(new Date().getFullYear())   // avtived year this will create new year so user may not be able to use the app
    const AY = 2020   // avtived year
    const [AM,UpdateAM] = useState(monthNames[new Date().getMonth()])   // avtived month
    // console.log(new Date().getDate() + '/' + AM +'/' + AY)
    const [AD,UpdateAD] = useState(new Date().getDate() + '/' + AM +'/' + AY)   // avtived Date

    function Save_in_excel(Year=AY){
        let header = ['Date',"Data"].join(',') + '\n';
        let csv = header;
        monthNames.forEach(month => {
            let days = new Date(2020, monthNames.indexOf(month) + 1, 0).getDate() 
            for (let day = 0; day < days; day++) {
                let date = day+1 +'/'+month+'/'+Year;
                let list = localStorage.getItem(date);
                if (list && list !== "[]"){
                    // console.log(JSON.parse(list))
                    csv += [date,list.replace(',',';')].join(',')+"\n";
                }
            }
                
        }); 
     
        let csvData = new Blob([csv], { type: 'text/csv' });  
        let csvUrl = URL.createObjectURL(csvData);
    
        let hiddenElement = document.createElement('a');
        hiddenElement.href = csvUrl;
        hiddenElement.target = '_blank';
        // eslint-disable-next-line
        hiddenElement.download = Year + 'Data' + '.csv';
        hiddenElement.click();
    }
    
    switch (CP){
        case 'Day':
            return (<Day date={AD} CP={CP} UpdateCP={UpdateCP}/>)
        case 'Year':
            return (<Year monthNames={monthNames} CP={CP} UpdateCP={UpdateCP} UpdateAM={UpdateAM} Save_in_excel={Save_in_excel}/>)
        default :
            return (<Month month={AM} CP={CP} UpdateCP={UpdateCP} UpdateAD={UpdateAD} AM={AM} AY={AY} monthNames={monthNames} />)
    }
}

export default App;
