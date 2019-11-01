import React from 'react';

import './App.css';
import PlayerCard from "./components/PlayerCard";

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
      <div>Womans World Cup</div>
     

      <div>
        <PlayerCard/>
      </div> 

    </div>
  );

 }

}
export default App;
