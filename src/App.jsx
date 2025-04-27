import Card from './Card.jsx'
import leo from './assets/lionel-messi.jpeg'
import cr7 from './assets/cristiano.jpeg'

// import PlayerDetails from './PlayerDetails.jsx';

function App() {

    const messistats = {attack: "98%", speed: "89%", technique: "98%", dribbling: "92%", shooting: "95%", passing: "96%", defence: "49%"};
    const cr7stats = {attack: "98%", speed: "90%", technique: "94%", dribbling: "91%", shooting: "95%", passing: "94%", defence: "49%"};

  return(
    <>
      <Card playerFirstName="Lionel" playerLastName="Messi" playerImage ={leo} {...messistats}/>
      <Card playerFirstName="Cristiano" playerLastName="Ronaldo" playerImage ={cr7} {...cr7stats}/>      

      {/* <PlayerDetails/> */}
    </>
  );
}

export default App
