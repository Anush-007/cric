import React from 'react';

function Team({ img, name }) {
	return (
		<>
			<img src='img' alt={name} />
			<span>{name}</span>
		</>
	);
}

export default Team;
