//DBOARD page->Reports page //access via path or GotoDashboards button from map 

import {React, useState, useEffect } from 'react';
import Sidebar from "../DashboardsConstructors/Sidebar.jsx";
import '../CSS FILES/dashpage.css'
import JsonData from '../JSON FILES/NumericJson.json'
import {
    ScatterChart, Scatter, XAxis, YAxis,Zaxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    ZAxis
} from "recharts";
import './Header.jsx'
  

function Templates() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    

    /*useEffect(() => {
        const fetchDatas = async () => {
          const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
          const data = await res.json();
          console.log(data);
          setdata(data?.data);
        };
        fetchDatas();
    }, []);*/
    
    const Numerical=JsonData;
    return(
        <div className='grid-container'>
            <Sidebar className='sidebar' openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div className='main-conatiner'>
            <br/><h1 className="h1">Charts will be placed here </h1>
            
            </div>
        </div>
    )
}
export default Templates;
           /* <h3 className='introduce'>Welcome to the dashbboard page, <br></br> here you will find responsive organized data aiming to take a better overall view regarding the complexity of numbers and flows. 
            Bars, lines, treemaps and dynamic content is going to help you understand efficiently data patterns and ectract usefull informations.
            <br/>Let's dive into.</h3>  */
