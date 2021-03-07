import React, { useState } from "react";
import {Header, Body, Footer } from "./components/index"
import './style.css'



function App(){
  const [state, setState] = useState("");
  const [lastState, setLastState] = useState("");
  const [flag, setFlag] = useState(false);
  const [city, setCity] = useState("");
  const [currState, setCurrState] = useState("");
  const [lastCity, setLastCity] = useState("");

  return (
      <div className='container-header'>
        <div>
          <Header className='header' />
        </div>
        <div className='container-body'>
          <Body className='body' flag={flag} lastState={lastState} lastCity={lastCity}/>
          <Footer className='footer' setLastCity={setLastCity} lastCity={lastCity} city={city} setCity={setCity} currState={currState} setCurrState={setCurrState} setState={setState} setFlag={setFlag} setLastState={setLastState} state={state} lastState={lastState}/>
        </div>
      </div>
  );
}

export default App;