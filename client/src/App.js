import React from 'react';

import './App.css';
import PlayerCard from "./components/PlayerCard";
import NavbarSlider from "./components/NavbarSlider";
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
   players: []
    };
  }

  componentDidMount() {
    console.log("first render(mounting)");
    axios
    .get("http://localhost:5000/api/players")
    .then(res => this.setState({ players: res.data }))
    //.catch(err => console.log("error"));
  
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
