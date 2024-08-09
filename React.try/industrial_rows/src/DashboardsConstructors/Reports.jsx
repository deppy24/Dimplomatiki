//DBOARD page->Reports page //access via path or GotoDashboards button from map

import { React, useState, useEffect } from 'react';
import Sidebar from '../DashboardsConstructors/Sidebar.jsx';
import '../CSS FILES/dashpage.css';
import './Header.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	RadarChart,
	PolarGrid,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	PolarAngleAxis,
	ResponsiveContainer,
	Radar,
	PolarRadiusAxis,
	AreaChart,
	Area,
	Legend,
} from 'recharts';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Templates() {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};
	const [data, setData] = useState([]);

	const query = useQuery();
	const id = query.get('id');
	const token = localStorage.getItem('token');

	const properties = ['value_ISO', 'value_DEMO', 'value_ACC', 'value_P2P', 'valueTEMP'];
	const navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:8081/stream-data?id=${id}`, {
					headers: {
						Authorization: token,
					},
					signal,
				});

				if (response.status !== 200) {
					navigate('/');
					return;
				}

				const reader = response.body.getReader();
				const decoder = new TextDecoder('utf-8');
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					const chunk = decoder.decode(value).split('\n').filter(Boolean);

					setData((prevData) => {
						const d = [
							...prevData,
							...chunk.map((item) => {
								const newItem = JSON.parse(item);
								newItem.formatedDate = new Date(newItem.date).toLocaleString();
								return newItem;
							}),
						];
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
	}, [id, navigate, token]);

	return (
		<div className='grid-container'>
			<Sidebar
				className='sidebar'
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<div className='main-conatiner'>
				<h1>Charts</h1>
				<ResponsiveContainer
					width='100%'
					height={400}>
					<AreaChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='formatedDate' />
						<YAxis />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='value_DEMO'
							stackId='1'
							stroke='#8884d8'
							fill='#8884d8'
						/>
						<Area
							type='monotone'
							dataKey='value_ISO'
							stackId='1'
							stroke='#82ca9d'
							fill='#82ca9d'
						/>
						<Area
							type='monotone'
							dataKey='value_ACC'
							stackId='1'
							stroke='#ffc658'
							fill='#ffc658'
						/>
						<Area
							type='monotone'
							dataKey='value_P2P'
							stackId='1'
							stroke='#aac658'
							fill='#aac658'
						/>
						<Area
							type='monotone'
							dataKey='valueTEMP'
							stackId='1'
							stroke='#ffc6aa'
							fill='#ffc6aa'
						/>
					</AreaChart>
				</ResponsiveContainer>
				<div className='spiders'>
					{properties.map((property) => (
						<ResponsiveContainer
							key={property}
							width='20%'
							height={400}>
							<RadarChart
								cx='50%'
								cy='50%'
								outerRadius='80%'
								data={data}>
								<PolarGrid />
								<PolarAngleAxis dataKey='formatedDate' />
								<PolarRadiusAxis />
								<Tooltip />
								<Legend />
								<Radar
									name={property}
									dataKey={property}
									stroke='#8884d8'
									fill='#8884d8'
									fillOpacity={0.6}
								/>
							</RadarChart>
						</ResponsiveContainer>
					))}
				</div>
			</div>
		</div>
	);
}
export default Templates;
/* <h3 className='introduce'>Welcome to the dashbboard page, <br></br> here you will find responsive organized data aiming to take a better overall view regarding the complexity of numbers and flows. 
            Bars, lines, treemaps and dynamic content is going to help you understand efficiently data patterns and ectract usefull informations.
            <br/>Let's dive into.</h3>  */
