import React from 'react';

import './App.css';
import PlayerCard from "./components/PlayerCard";
import NavbarSlider from "./components/NavbarSlider";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
   players: []
    };
  }





render() {
  return (
    <div className="App">
      <h1>Womans World Cup</h1>

      <div className="Slider">
        <NavbarSlider/>  
      </div>

      <div>
        <PlayerCard/>
      </div> 

    </div>
  );

 }

}
export default App;
