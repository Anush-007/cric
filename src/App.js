import './App.css';
import MatchScheduleCard from './components/MatchScheduleCard';

import imgg from './assets/teamLogos/NIT Patna.png';

const teams = [
	{ img: imgg, name: 'NIT Patna' },
	{ img: imgg, name: 'NIT Patna' },
];

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					<MatchScheduleCard
						time='15:00'
						teams={teams}
					></MatchScheduleCard>
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
