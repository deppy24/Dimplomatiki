import './CSS FILES/Map.css';

function MyMarker({ text, tooltip, $hover }) {
	const handleClick = () => {
		console.log(`You clicked on ${tooltip}`);
	};

	return (
		<div className={$hover ? 'circle hover' : 'circle'}>
			<span
				onClick={handleClick}
				className='circleText tooltip'
				title={tooltip}></span>
		</div>
	);
}

export default MyMarker;
