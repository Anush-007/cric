import React from 'react';
import './MatchScheduleCard.css';
import Team from './Team';

function MatchScheduleCard({ time, teams }) {
	return (
		<div className='card'>
			<p className='time'>{time}</p>
			<div className='body'>
				<Team img={teams[0].img} name={teams[0].name}></Team>
				<span>Vs</span>
				<Team img={teams[1].img} name={teams[1].name}></Team>
			</div>
		</div>
	);
}

export default MatchScheduleCard;
