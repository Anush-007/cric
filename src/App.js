import './App.css';
import MatchScheduleCard from './components/MatchScheduleCard';
import LeaderBoard from './components/LeaderBoard';

import imgg from './assets/teamLogos/NIT Patna.png';

const teams = [
	{ img: imgg, name: 'NIT Patna' },
	{ img: imgg, name: 'NIT Patna' },
];

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <MatchScheduleCard
					time='15:00'
					teams={teams}
				></MatchScheduleCard> */}
				<LeaderBoard />
			</header>
		</div>
	);
}

export default App;
