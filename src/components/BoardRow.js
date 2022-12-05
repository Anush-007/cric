import React from 'react';
import './BoardRow.css';

function BoardRow({ rank, teamName, points, isHead }) {
	if (isHead) {
		return (
			<th className='row head'>
				<td>Sr.</td>
				<td>Team</td>
				<td>Points</td>
			</th>
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
