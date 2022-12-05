import React from "react";
import { MdLeaderboard,MdOutlineSportsCricket,MdSchedule } from "react-icons/md";
import{GrFormSchedule} from "react-icons/gr";
function Navbar() {
  return (
    <div className="Navbar_Container">
      <div className="Navbar_heading">Crick NIT</div>
      <div className="Navbar_lowerContainer">
        <div className="LiveMatch_Navbar">
          <div className="LiveMatchIcon">
          <MdOutlineSportsCricket/>
            {/* <img src="./images/Live_Match.png" alt="point" /> */}
          </div>

          <div className="LiveMatch_text">LIVE MATCH</div>
        </div>
        <div className="LeaderBoard_Navbar">
          <div className="LeaderBoardIcon">
            <MdLeaderboard />
            {/* <img src="./images/LeaderBoard.png" alt="point" /> */}
          </div>
          <div className="LiveMatch_text">LEADERBOARD</div>
        </div>
        <div className="Schedule_Navar">
          <div className="ScheduleIcon">
            {/* <img src="./images/Schedule.png" alt="point" /> */}
            <MdSchedule/>
          </div>
          <div className="LiveMatch_text">SCHEDULE</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
