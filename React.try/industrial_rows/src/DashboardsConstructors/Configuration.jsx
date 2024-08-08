import Sidebar from '../DashboardsConstructors/Sidebar.jsx';
import '../CSS FILES/dashpage.css';
import './Header.jsx';
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import '../CSS FILES/Map.css';
import { useNavigate } from 'react-router-dom';

function Configuration() {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
	const [select, setSelectedOption] = useState('');
	const [selectedPin, setSelectedPin] = useState(null);

	const navigate = useNavigate();

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
		setSelectedPin(locations[event.target.value]);
	};

	const handlePinClick = (selectedPin) => {
		navigate(`/Templates?id=${selectedPin.id}`);
	};

	const locations = [
		{
			id: 1,
			name: 'Επιλογή 1',
			address: '14th km Thessaloniki, Νέα Μουδανιά 570 01',
			lat: 40.53623903334093,
			lng: 23.009268511780395,
		},
		{
			id: 2,
			name: 'Επιλογή 2',
			address: 'Εγνατία 156, Θεσσαλονίκη 546 36',
			lat: 40.625249019392484,
			lng: 22.960205055964213,
		},
	];

	const LocationPin = ({ selectedPin }) => (
		<div className='pin'>
			<Icon
				icon={locationIcon}
				className='pin-icon'
			/>
			<p className='pin-text'>
				{selectedPin.address} <button onClick={() => handlePinClick(selectedPin)}>click me!</button>
			</p>
		</div>
	);

	return (
		<div className='grid-container'>
			<Sidebar
				className='sidebar'
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<div className='main-conatiner'>
				<div className='map'>
					<div className='formofpins'>
						<label htmlFor='Location'>Choose your location:</label> <br />
						<select
							id='loc'
							value={select}
							onChange={handleChange}>
							<option
								value=''
								name='empty'
								disabled>
								Select an option
							</option>

							{locations.map((option, i) => (
								<option
									key={i}
									value={i}>
									{option.name}
								</option>
							))}
						</select>
					</div>
					<div className='google-map'>
						<GoogleMapReact
							bootstrapURLKeys={{ key: 'AIzaSyDsglBBOSMgYp9Wn7hPnC4HiYfy5eXintM' }}
							defaultCenter={locations[0]}
							defaultZoom={10}>
							{selectedPin ? (
								<LocationPin
									selectedPin={selectedPin}
									lat={selectedPin.lat}
									lng={selectedPin.lng}
									name={selectedPin.buildingname}
								/>
							) : (
								''
							)}
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Configuration;
