import GoldCard from './Gold-Card.jsx'
import BlueCard from './Blue-Card.jsx'
import leo from './assets/lionel-messi.jpeg'
import cr7 from './assets/cristiano.jpeg'
import kylian from './assets/kylian.jpeg'
import erling from './assets/erling3.png'

// import PlayerDetails from './PlayerDetails.jsx';

function App() {

    const messistats = {attack: "98%", speed: "89%", technique: "98%", dribbling: "92%", shooting: "95%", passing: "97%", defence: "49%"};
    const cr7stats = {attack: "98%", speed: "90%", technique: "94%", dribbling: "91%", shooting: "95%", passing: "94%", defence: "49%"};
    const kylianstats = {attack: "98%", speed: "99%", technique: "96%", dribbling: "95%", shooting: "95%", passing: "95%", defence: "49%"};
    const erlingstats = {attack: "98%", speed: "98%", technique: "97%", dribbling: "95%", shooting: "99%", passing: "95%", defence: "49%"};


  return(
    <>
      <GoldCard playerFirstName="Kylian" playerLastName="Mbappe" playerImage ={kylian} {...kylianstats}/>
      <GoldCard playerFirstName="Erling" playerLastName="Haaland" playerImage ={erling} {...erlingstats}/>


      <BlueCard playerFirstName="Lionel" playerLastName="Messi" playerImage ={leo} {...messistats}/>
      <BlueCard playerFirstName="Cristiano" playerLastName="Ronaldo" playerImage ={cr7} {...cr7stats}/>


    </>
  );
}

export default App
