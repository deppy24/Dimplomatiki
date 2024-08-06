
import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Link } from "react-router-dom";
import './CSS FILES/Map.css';
import { Button, Tooltip } from 'bootstrap';
import GoogleMapReact from 'google-map-react';
import MyMarker from './Marker';



const location = [
{
name: 'Διεθνές Πανεπιστήμιο Ελλάδας',
address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
lat: 40.53623903334093,
lng: 23.009268511780395,
},
{
name: 'Πανεπιστήμιο Μακεδονίας',
address: 'Εγνατία 156, Θεσσαλονίκη 546 36',
lat: 40.625249019392484,
lng: 22.960205055964213,
},
{
name: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης',
address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
lat: 40.53630426420577,
lng: 23.00919340992946,
}

];



function Mapp () {
const [select, setselect] = useState()
const [select2, setselect2] = useState()
const [select3, setselec3] = useState()

let lng1 = null;
let lat1 = null;

const handleSubmit =(e) =>{
e.preventDefault();
}

//Mouse event by clicking trigger
const handleClick = (e) => {
e.preventDefault();

    /*if (e.target.name == select){
      console.log("DIPAE was clicked");
      lng1=40.625249019392484
      lat1=22.960205055964213
      MyMarker = [lng1 , lat1]
    }else if(e.target.name == select2){
      console.log("AUTH was clicked")
    }else if (e.target.name == select3){
      console.log("PAMAK was clicked")
    }*/

}

const defaultProps = {
    center: {
    lat: 40.64046624145957, //Center in Thessaloniki
    lng: 22.925083625972935
    },
    zoom: 12,
};



return (
<div className="map">
<div className='header'>
<h2 className="map-h2">Check your campus location</h2>

      <div className='button'>
        <Link to="/DBOARD"><button className='btn-goto'>Go to Dashboards</button></Link>
      </div>
      </div>
        <div>
          <form action='' className='formofpins'>
          <label for="Location">Choose your location:</label> <br/>
          <select   id="loc">
          <option  name="empty"></option>
          <option  onClick={handleClick}  name="select" value={select} type="submit">International Hellenic University</option>
          <option onClick={handleClick} name="select2" value={select2} type="submit">Aristotle University</option>
          <option onClick={handleClick} name="select3"  value={select3} type="submit">University of Macedonia</option>
          </select><br/>

              </form>
        </div>




      <div className="google-map" style={{ height: '100vh', width: '70%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDsglBBOSMgYp9Wn7hPnC4HiYfy5eXintM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      
      
      <MyMarker  lat={40.53623903334093} lng={ 23.009268511780395} ></MyMarker>
      <MyMarker onClick={handleClick} lat={40.625249019392485} lng={22.960205055964214}></MyMarker>
      <MyMarker onClick={handleClick} lat={40.53630426420577} lng={23.00919340992946}></MyMarker>
      </GoogleMapReact>

      </div>
    </div>


);
};

export default Mapp;



