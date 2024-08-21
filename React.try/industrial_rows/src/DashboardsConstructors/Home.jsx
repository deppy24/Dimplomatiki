import React, { useState, useEffect } from 'react';
import { BsPeopleFill, BsFillBellFill, BsFillClockFill } from 'react-icons/bs';

//Gets current Date and Time (the moment we enter the page or refresh not continuously)
function getDate() {
	const today = new Date();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	const date = today.getDate();
	const hour = today.getHours();
	const minutes = today.getMinutes();
	const seconds = today.getSeconds();
	return `${'CURRENT DATE:'} ${month}/${date}/${year} ${'CURRENT TIME:'}${hour}:${minutes}:${seconds}`;
}

function Home({ errors1, errors2 }) {
	const [currentDate, setCurrentDate] = useState(getDate());

	return (
		<main className='main-container'>
			<div className='main-title'>
				<h3>DASHBOARD</h3>
			</div>

			<div className='main-cards'>
				<div className='card'>
					<div className='card-inner'>
						<BsFillClockFill className='one_card_icon' />
					</div>
					<h2 className='h2date'> TIME</h2>
					<h1 className='Datetime'>{currentDate}</h1>
				</div>

				<div className='card'>
					<div className='card-inner'>
						<h3>CUSTOMERS</h3>
						<BsPeopleFill className='card_icon' />
					</div>
					<h1>15</h1>
				</div>
				<div className='card'>
					<div className='card-inner'>
						<h3>ALERTS</h3>
						<BsFillBellFill className='card_icon' />
					</div>
					<h1>{`${errors1}|${errors2}`}</h1>
				</div>
			</div>

			<div className='about-section'>
				<br />
				<h1>ΑΝΑΚΟΙΝΩΣΕΙΣ </h1> <br />
				<div className='flexbox'>
					<span className='textbox1'>Ανακοίνωση 1</span> <br />
					<br />
					<span className='textbox1'>Ανακοίνωση 2</span>
				</div>
			</div>
			<div className='notes-section'>
				<br />
				<h1>ΣΗΜΕΙΩΣΕΙΣ</h1>
			</div>
		</main>
	);
}

export default Home;
