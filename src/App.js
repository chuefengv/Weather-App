import React, { useEffect, useState } from "react";
import {Header, Body, Footer } from "./components/index"
import './style.css'



function App(){
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState(false);
  const [lastCity, setLastCity] = useState("");


  return (
    <div className='container'>
      <Header className='header' />
      <Body className='body' flag={flag} lastCity={lastCity}/>
      <Footer className='footer' setCity={setCity} setFlag={setFlag} setLastCity={setLastCity} city={city}/>
    </div>
  );
}

export default App;