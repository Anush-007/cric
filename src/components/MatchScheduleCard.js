import React from 'react';
import './MatchScheduleCard.css';

function MatchScheduleCard({ time }) {
	return (
		<div className='card'>
			<p className='time'>{time}</p>
			<div className='body'>
				<span>Vs</span>
			</div>
		</div>
	);
}

export default MatchScheduleCard;
