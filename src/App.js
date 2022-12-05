import './App.css';
import MatchScheduleCard from './components/MatchScheduleCard';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					<MatchScheduleCard time='15:00'></MatchScheduleCard>
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
