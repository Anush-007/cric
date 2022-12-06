import React, { useEffect, useState } from 'react';
import BoardRow from './BoardRow';
import './LeaderBoard.css';
import db from './../api/fire.js';
import { onValue, ref, set } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const getdata = async () => {
	const query = ref(db, 'Leaderboard');
	onValue(query, snap => {
		snap.forEach(aa => console.log(aa));
	});
};

getdata();

function LeaderBoard() {
	useEffect(() => {
		const query = ref(db, 'Leaderboard');
		onValue(query, snap => {
			const data = snap.forEach(aa => console.log(aa));
		});
		// return onValue(query, snapshot => {
		// 	const data = snapshot.val();
		// 	if (snapshot.exists()) {
		// 		Object.values(data).map(entry => {
		// 			console.log(entry);
		// 			if (entry) {
		// 				setBoard(entry => [...board, entry]);
		// 			}
		// 		});
		// 	}
		// });
	}, []);

	const [board, setBoard] = useState([]);

	return (
		<table className='table'>
			<thead>
				<BoardRow isHead={true}></BoardRow>
			</thead>
			<tbody>
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
			</tbody>
		</table>
	);
}

export default LeaderBoard;
