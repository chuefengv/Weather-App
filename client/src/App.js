import React, { useState } from "react";
import {Header, Body, Footer } from "./components/index"
import './style.css'

function App(){
  //Placeholder for the current being selected in the dropbox US State
  const [state, setState] = useState("");
  //Placeholder for the state being queried
  const [lastState, setLastState] = useState("");
  //flag to see if first query has been set off
  const [flag, setFlag] = useState(false);
  //Placeholder for the current city being selected in the dropbox US State
  const [city, setCity] = useState("");
  const [currState, setCurrState] = useState("");
  //Placeholder for the city being queried
  const [lastCity, setLastCity] = useState("");


//base layout of css grid split into header, body, and footer/searchbar
  return (
      <div className='container-header'>
        <div>
          <Header className='header' />
        </div>
        <div className='container-body'>
          <Body className='body' flag={flag} lastState={lastState} lastCity={lastCity} city={city}/>
          <Footer className='footer' setLastCity={setLastCity} lastCity={lastCity} city={city} setCity={setCity} currState={currState} setCurrState={setCurrState} setState={setState} setFlag={setFlag} setLastState={setLastState} state={state} lastState={lastState}/>
        </div>
      </div>
  );
}

export default App;