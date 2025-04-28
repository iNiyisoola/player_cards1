
function GoldCard(props){

  const calculateOverall = () =>{
    const stats = [
                  props.attack, 
                  props.speed, 
                  props.technique, 
                  props.shooting, 
                  props.passing, 
                  props.dribbling, 
                  props.defence
                  ];

    const numbers = stats.map(stat => parseInt(stat.replace('%', '')));
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = Math.round(sum / numbers.length);
    return `${average}`;
  }

  const overall = calculateOverall();


  return(
    <>
      <div className="gold-player-card">
        <div className="image-stats-div">
          {/* <span className="image-div"> */}
            <img className="player-image" src={props.playerImage} alt=""></img>
          {/* </span> */}
          <div className="stats-div">
            <p className="stats"><strong>ATT: </strong> {props.attack}</p>
            <p className="stats"><strong>SPD: </strong> {props.speed}</p>
            <p className="stats"><strong>TEC: </strong> {props.technique}</p>
            <p className="stats"><strong>SHT: </strong> {props.shooting}</p>
            <p className="stats"><strong>PAS: </strong> {props.passing}</p>
            <p className="stats"><strong>DRB: </strong> {props.dribbling}</p>
            <p className="stats"><strong>DEF: </strong> {props.defence}</p>
            <div className="overallRating">
              <p className="overall"><strong>{overall}</strong> </p>
            </div>
          </div>
          

        </div>
        <div className="player-name">
          <span className="player-first-name">{props.playerFirstName}</span> 
          <span className="player-last-name">{props.playerLastName}</span>
        </div>
      </div>

    </>
  );
}
export default GoldCard