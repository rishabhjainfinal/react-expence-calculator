import React, { useState,useEffect } from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";

import Day from './day/Day'
import Month from './Month/Month'
import Year from './Year/Year'

import './App.css';


function App() {
	// const history = window.history;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [CP,UpdateCP] = useState('Month');
    // const [AY,UpdateAY] = useState(new Date().getFullYear())   // avtived year this will create new year so user may not be able to use the app
    const AY = new Date().getFullYear()   // avtived year
    const [AM,UpdateAM] = useState(localStorage.getItem("HooksData") ? JSON.parse(localStorage.getItem("HooksData"))["AM"] :monthNames[new Date().getMonth()])   // avtived month
    const [AD,UpdateAD] = useState(localStorage.getItem("HooksData") ? JSON.parse(localStorage.getItem("HooksData"))["AD"] : new Date().getDate() + '/' + AM +'/' + AY )   // avtived Date

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

    // have to save AM,AD in localstorage because when user refresh all set to default 
    useEffect(() => {
      // update the CP,AM,AD if exist in database
      localStorage.setItem("HooksData",JSON.stringify({'AM':AM,'AD':AD}))
      // let cur_data = JSON.parse(localStorage.getItem("HooksData"))
      // console.log(cur_data)
    },[AM,AD])

	// hisory motion should be only in {year <--> month <--> day }
	// if i am on the year then close else if on month then to year else to day 
	// go to the first page of tab  history.go(-(history.length - 1))
	// console.log(history.length-1)
	// console.log(window.location.toString())

    return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                  <Redirect to="/month" />
              </Route>
              <Route exact path="/day">
                <Day date={AD} CP={CP} UpdateCP={UpdateCP}/>
              </Route>
              <Route exact path="/month">
                <Month month={AM} CP={CP} UpdateCP={UpdateCP} UpdateAD={UpdateAD} AM={AM} AY={AY} monthNames={monthNames} />
              </Route>
              <Route exact path="/year">
                <Year monthNames={monthNames} CP={CP} UpdateCP={UpdateCP} UpdateAM={UpdateAM} Save_in_excel={Save_in_excel}/>
              </Route>
            </Switch>
          </Router>
        </div>
    );
}

export default App;
