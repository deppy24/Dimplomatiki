import React, { useState } from 'react'

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Link } from "react-router-dom";
import './CSS FILES/Map.css';
import { Button, Tooltip } from 'bootstrap';

import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import MyMarker from './Marker';
import { getElementInfo } from 'devextreme-react/cjs/core/configuration/react/element';

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
},
{
name: 'Διεθνές Πανεπιστήμιο Ελλάδας',
address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
lat: 40.53623903334093,
lng: 23.009268511780395,
}

];

const location1 = [
{
name: 'Διεθνές Πανεπιστήμιο Ελλάδας',
address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
lat: 40.53623903334093,
lng: 23.009268511780395,
}
]

function Mapp () {
const [DIPAE, setDIPAE] = useState()
const [PAMAK, setPAMAK] = useState()
const [AUTH, setAUTH] = useState()

const handleSubmit =(e) =>{
e.preventDefault();
}

//Mouse event by clicking trigger
const handleClick = (e) => {
e.preventDefault();

    /*if (e.target.name == DIPAE){
      console.log("DIPAE was clicked"),

    }else if(e.target.name == AUTH){
      console.log("AUTH was clicked")
    }else if (e.target.name == PAMAK){
      console.log("PAMAK was clicked")
    }*/

}

const defaultProps = {
center: {
lat: 40.64046624145957, //Center in Thessaloniki
lng: 22.925083625972935
},
zoom: 12
};

const distanceToMouse = (pt, mp) => {
if (pt && mp) {
// return distance between the marker and mouse pointer
return Math.sqrt(
(pt.x - mp.x) _ (pt.x - mp.x) + (pt.y - mp.y) _ (pt.y - mp.y)
);
}
};

function initMap() {

    const { Map } =   google.maps.importLibrary("maps");
    const map = new Map(document.getElementById("map"),{
              zoom:10,
              center:{lat: 40.53623903334093, lng:23.009268511780395},
              mapId:"DEMO_MAP_ID"
            })

    const myLatLng = { lat: -25.363, lng: 131.044 };
    /*const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });

}

window.initMap = initMap;\*/
}
return (
<div className="map">
<div className='header'>
<h2 className="map-h2">Check your campus location</h2>
<div>
<form action='' className='formofpins'>
<label for="Location">Choose your location:</label> <br/>
<select  onClick={handleClick} id="loc">
<option name="empty"></option>
<option  name="DIPAE" value={DIPAE} type="submit">International Hellenic University</option>
<option name="AUTH" value={AUTH} type="submit">Aristotle University</option>
<option name="PAMAK"  value={PAMAK} type="submit">University of Macedonia</option>
</select><br/>

        </form>
      </div>
      <div className='button'>
        <Link to="/DBOARD"><button className='btn-goto'>Go to Dashboards</button></Link>
      </div>
      </div>


      </div>
    //<div>

);
};

export default Mapp;

//Button gia go to see the proper charts <MyMarker  lat={40.64313608728424} lng={23.0416549912804}  tooltip="HELLO" />
/\*function initMap() {
const myLatLng = { lat: -25.363, lng: 131.044 };
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 4,
center: myLatLng,
});

new google.maps.Marker({
position: myLatLng,
map,
title: "Hello World!",
});
}

window.initMap = initMap;

<div className="google-map" style={{ height: '100vh', width: '70%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDsglBBOSMgYp9Wn7hPnC4HiYfy5eXintM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        distanceToMouse={distanceToMouse}
      >
         <MyMarker  lat  lng={LNG}  tooltip="Click me in order to go in the information page"/>
        


      </GoogleMapReact>*/










const google = window.google

const {AdvancedMarkerElements} = await google.maps.importLibrary("marker")
const { Map } = await  google.maps.importLibrary("maps");
const map = new Map(document.getElementById("map"),{
          zoom:10,
          center:{lat: 40.53623903334093, lng:23.009268511780395},
          mapId:"DEMO_MAP_ID",
});

new AdvancedMarkerElements ({
    map: map,
    position:{lat: 40.53623903334093, lng:23.009268511780395}
});

function GoogleMap(){
  return(
    <GoogleMap></GoogleMap>
  )
}
export default GoogleMap