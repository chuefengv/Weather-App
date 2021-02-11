import React, { useEffect, useState } from "react";
import { weatherAPI } from "./services/weatherCall";
import {Header, Body, Footer } from "./components/index"
import './style.css'



function App(){
    // const [weather, setWeather] = useState([]);

    // useEffect(()=>{
    //     weatherAPI()
    //     .then(res =>{
    //         console.log(res.data);
    //         setWeather(res.data);
    //     })
    //     .catch(err =>{
    //         console.log('bad error');
    //     })
    // }, []);

  return (
    <div className='container'>
      <Header className='header' />
      <Body className='body' />
      <Footer className='footer' />
    </div>
  );
}

export default App;