import React from 'react';
import './Team.css';

function Team({ img, name }) {
	return (
		<div className='team'>
			<img src={img} alt={name} />
			<span>{name}</span>
		</div>
	);
}

export default Team;
