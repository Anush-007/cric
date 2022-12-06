import React from 'react';
import './BoardRow.css';

function BoardRow({ rank, teamName, points, isHead }) {
	if (isHead) {
		return (
			<tr className='row head'>
				<th>Sr.</th>
				<th>Team</th>
				<th>Points</th>
			</tr>
		);
	}
	return (
		<tr className='row'>
			<td>{rank}</td>
			<td>{teamName}</td>
			<td>{points}</td>
		</tr>
	);
}

export default BoardRow;
