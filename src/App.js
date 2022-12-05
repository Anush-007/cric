import './App.css';
import React from 'react'
import LiveMatchCard from './components/LiveMatchCard'
import Navbar from './components/Navbar'
import LiveInsideCard from './components/LiveInsideCard'

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <LiveMatchCard teamA="NIT Andhrapradesh" teamAruns="29/1" teamB="NIT Patna" teamBruns="187/0" comment_Live="Winner Team A by 10 runs"/>
    
      <LiveInsideCard teamA="NIT Andhrapradesh" teamB="NIT Patna" batsman1_name="Zaid" batsman1_runs="1" batsman2_name="Santra" batsman2_runs="8" bowler="Atharva" runs="1 2 3 4 5 6" />
    </div>
    
  );
}

export default App;
