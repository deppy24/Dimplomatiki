//DBOARD page->Reports page //access via path or GotoDashboards button from map

import { React, useState, useEffect } from 'react';
import Sidebar from '../DashboardsConstructors/Sidebar.jsx';
import '../CSS FILES/dashpage.css';
import './Header.jsx';

function Templates() {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		const fetchData = async () => {
			const response = await fetch('http://localhost:8081/stream-data', { signal });
			const reader = response.body.getReader();
			const decoder = new TextDecoder('utf-8');
			try {
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					const chunk = decoder.decode(value).split('\n').filter(Boolean);

					setData((prevData) => {
						const d = [...prevData, ...chunk.map((item) => JSON.parse(item))];
						return d.slice(-10);
					});
				}
			} catch (err) {
				if (err.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error('Fetch error:', err);
				}
			}
		};

		fetchData();
		return () => {
			controller.abort(); // Abort the fetch request when the component unmounts
		};
	}, []);

	return (
		<div className='grid-container'>
			<Sidebar
				className='sidebar'
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<div className='main-conatiner'>				
				<div>
					<h1>Streamed Data</h1>
					<ul>
						{data.map((item, index) => (
							<li key={index}>
								{item.date}: {item.value_ISO}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Templates;
/* <h3 className='introduce'>Welcome to the dashbboard page, <br></br> here you will find responsive organized data aiming to take a better overall view regarding the complexity of numbers and flows. 
            Bars, lines, treemaps and dynamic content is going to help you understand efficiently data patterns and ectract usefull informations.
            <br/>Let's dive into.</h3>  */
