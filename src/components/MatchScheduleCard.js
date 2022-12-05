import React from 'react';
import './MatchScheduleCard.css';

function MatchScheduleCard({ time }) {
	return (
		<div className='card'>
			<p className='time'>{time}</p>
		</div>
	);
}

export default MatchScheduleCard;
