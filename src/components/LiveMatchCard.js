import React from "react";

function LiveMatchCard(props) {
  return (
    <div className="LiveMatchCard">
      <div className="Live_logo">
        <div className="circle"></div>
        <div className="Live_text">LIVE</div>
      </div>
      <div className="team_A_Live">
        <div className="team_A_Name">{props.teamA}</div>
        <div className="team_A_runs">{props.teamAruns}</div>
      </div>
      <div className="team_B_Live">
        <div className="team_B_Name">{props.teamB}</div>
        <div className="team_B_runs">{props.teamBruns}</div>
      </div>

      <div className="comment_Live">{props.comment_Live}</div>
    </div>
  );
}

export default LiveMatchCard;
