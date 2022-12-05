import React from 'react';
import BoardRow from './BoardRow';
import './LeaderBoard.css';

const board = [
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
	{ teamName: 'VNIT', points: 10 },
];

function LeaderBoard() {
	return (
		<table className='table'>
			<BoardRow isHead={true}></BoardRow>
			{board.map((entry, index) => {
				return (
					<BoardRow
						{...entry}
						rank={index + 1}
						isHead={false}
						key={index}
					/>
				);
			})}
		</table>
	);
}

export default LeaderBoard;
