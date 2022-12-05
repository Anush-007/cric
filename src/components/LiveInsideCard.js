import React from "react";

function LiveInsideCard(props) {
  return (
    <div className="LiveInsideCard_Container">
      <div className="LiveInsideCard_header">
        {props.teamA} Vs {props.teamB}
      </div>

      <div className="LiveInsideCard_lowerContainer">
        <table>
          <tr>
            <th>Batsman</th>
            <th className="LiveInsideCard_runs">Runs</th>
          </tr>
          <tr>
            <td>{props.batsman1_name}</td>
            <td className="LiveInsideCard_runs">{props.batsman1_runs}</td>
          </tr>
          <tr>
            <td>{props.batsman2_name}</td>
            <td className="LiveInsideCard_runs">{props.batsman2_runs}</td>
          </tr>
        </table>
        <div className="LiveInsideCard_bowler">
          <b>Bowler : </b> {props.bowler}
        </div>
        <div className="LiveInsideCard_over">
          <b>Over No : </b> <b> 8</b>
        </div>
        <div className="LiveInsideCard_over_runs">{props.runs}</div>
      </div>
      
      <div className="ids_logo">
        <img
          src="./images/ids_logo.png"
          style={{ height: "20%",width: "35%" }}
          alt="ids_vnit"
        />
      </div>
    </div>
    
  );
}

export default LiveInsideCard;
