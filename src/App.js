import React, { useEffect, useState } from "react";
import {Header, Body, Footer } from "./components/index"
import './style.css'



function App(){
  const [state, setState] = useState("");
  const [lastState, setLastState] = useState("");
  const [flag, setFlag] = useState(false);



  return (
    <div className='container'>
      <Header className='header' />
      <Body className='body' flag={flag} lastState={lastState}/>
      <Footer className='footer' setState={setState} setFlag={setFlag} setLastState={setLastState} state={state}/>
    </div>
  );
}

export default App;