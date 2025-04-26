import leo from './assets/lionel-messi.jpeg'
import cr7 from './assets/cristiano.jpeg'

function Card(props){
  return(
    <>
      <div className="player-card">
          <img className="player-image" src={props.playerImage} alt=""></img>
          <div className="player-name">
            <span className="player-first-name">{props.playerFirstName}</span> 
            <br></br>
            <span className="player-last-name">{props.playerLastName}</span>
          </div>
          <div className="player-stats">
            <p><strong>ATT: </strong> {props.attack}</p>
            <p><strong>SPD: </strong> {props.speed}</p>
            <p><strong>SHT: </strong> {props.shooting}</p>
            <p><strong>PAS: </strong> {props.passing}</p>
            <p><strong>DEF: </strong> {props.defence}</p>
            <p><strong>TECN: </strong> {props.technique}</p>
            <p><strong>DRBL: </strong> {props.dribbling}</p>

          </div>
      </div>

      {/* <div className="player-card">
          <img className="player-image" src={cr7} alt=""></img>
          <h2 className="player-name">{props.playerName}</h2>
          <ul className="cr7-stats">
            <li><strong>ATT:</strong> {props.attack}</li>
            <li><strong>SPD:</strong> {props.speed}</li>
            <li><strong>TECN:</strong> {props.technique}</li>
            <li><strong>DRBL:</strong> {props.dribbling}</li>
            <li><strong>SHT:</strong> {props.shooting}</li>
            <li><strong>PAS:</strong> {props.passing}</li>
            <li><strong>DEF:</strong> {props.defence}</li>
          </ul>
      </div> */}
    </>
  );
}
export default Card