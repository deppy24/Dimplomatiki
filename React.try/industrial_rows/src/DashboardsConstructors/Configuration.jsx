

import Sidebar from "../DashboardsConstructors/Sidebar.jsx";
import '../CSS FILES/dashpage.css'
import './Header.jsx'
import React, { useState } from 'react'
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Link } from "react-router-dom";
import '../CSS FILES/Map.css';
import { Button, Tooltip } from 'bootstrap';

function Configuration() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }



    const location = [
        {
            name: 'Διεθνές Πανεπιστήμιο Ελλάδας',
            address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
            lat: 40.53623903334093,
            lng:  23.009268511780395,
        },
        {
            name: 'Πανεπιστήμιο Μακεδονίας',
            address: 'Εγνατία 156, Θεσσαλονίκη 546 36',
            lat: 40.625249019392484, 
            lng:  22.960205055964213,
        },
        {
            name: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης',
            address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
            lat: 40.53630426420577, 
            lng:  23.00919340992946,
        },
        {
          name: 'Διεθνές Πανεπιστήμιο Ελλάδας',
          address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
          lat: 40.53623903334093,
          lng:  23.009268511780395,
      }
    
    ];
    
    
    
    const LocationPin = ({text}) => (
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    );
    
    
   
    return(
        <div className='grid-container'>
            <Sidebar className='sidebar' openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div className='main-conatiner'>
            
 
                <div className="map">
                <div className='header'>
                <h2 className="map-h2">Enter your data device</h2>
                <div className='button'>
                    <Link to="/DBOARD"><button className='btn-goto'>Go to Dashboards</button></Link>
                </div>
                </div>
                <div className="google-map" >
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDsglBBOSMgYp9Wn7hPnC4HiYfy5eXintM" }}
                    defaultCenter={location[0]}
                    defaultZoom={10}>
                    {location.map((loc) => (
                    <LocationPin lat={loc.lat} lng={loc.lng} text={loc.address} name={loc.buildingname }/>
                    ))}
                    </GoogleMapReact>
                </div>
                </div>
            
            </div>
        </div>
    )
}
export default Configuration;