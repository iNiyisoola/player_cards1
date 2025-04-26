function Card(){
  return(
    <div className="player-card">
      <img className="player-image" src="" alt=""></img>
      <h2 className="player-name"></h2>
      <ul>
        <li>Attack</li>
        <li>Speed</li>
        <li>Technique</li>
        <li>Dribbling</li>
        <li>Shooting</li>
        <li>Passing</li>
        <li>Defence</li>
      </ul>
    </div>
  );
}
export default Card