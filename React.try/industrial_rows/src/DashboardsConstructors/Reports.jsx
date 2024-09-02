//DBOARD page->Reports page //access via path or GotoDashboards button from map

import { React, useState, useEffect } from 'react';
import Sidebar from '../DashboardsConstructors/Sidebar.jsx';
import '../CSS FILES/dashpage.css';
import './Header.jsx';
import { useLocation } from 'react-router-dom';
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

function Templates({ data1, data2 }) {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
	const [data, setData] = useState([]);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};

	const query = useQuery();
	const id = +query.get('id');

	const properties = ['value_ISO', 'value_DEMO', 'value_ACC', 'value_P2P', 'valueTEMP'];

	useEffect(() => {
		setData(id === 2 ? data2 : data1);
	}, [data1, data2, id]);

	return (
		<div className='grid-container'>
			<Sidebar
				className='sidebar'
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<div className='main-conatiner'>
				<h1>Area chart</h1>
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

				<h1>Radar Chart</h1>
				<div className='spiders'>
					{properties.map((property, i) => (
						<ResponsiveContainer
							key={property}
							width={550}
							height={300}>
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
