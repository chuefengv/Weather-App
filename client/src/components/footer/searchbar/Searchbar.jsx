import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Searchbar.css';

const PORT = (process.env.PORT || '5000');

function Searchbar({setState, setFlag, setLastState, state, lastState, city, setCity, currState, setCurrState, setLastCity, lastCity}){
    const [cityQuery, setCityQuery] = useState([]);

    let handleStateChange = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setState(e.target.value);
        // setCity(defaultValue)
    }
    let handleCityChange = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setCity(e.target.value);
    }

    let handleClear = (e) =>{
        e.preventDefault();
        console.log("Cleared the selects");
        document.getElementById('s-search').selectedIndex=0;
        document.getElementById('c-search').selectedIndex=0;
        setState("");
        setCity("");
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("data has been submitted");
        setLastState(state)
        setLastCity(city)
        setFlag(true);
    }

    useEffect(()=>{
        setCurrState(lastState);
        Axios.get(`http://localhost:${PORT}/api/data`, {params: {state:state}})
        .then((response)=>{
            setCityQuery(response.data);
        })
    },[state, lastState, setCurrState]);

    return(
        <div className='searchbar'>
            <div className='search-header'>Select Your State</div>
            <div className='search-wrapper'>
                <div className='search-1'>
                    <p>State Search</p>
                </div>
                <div className="state-search">
                    <select id='s-search' defaultValue="default" onChange={handleStateChange}>
                        <option value="default" disabled>Choose a state...</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                </div>
                <div className='search-2'>
                    <p>Advanced City Search</p>
                </div>
                <div className='city-search'>
                    <select id='c-search' tabIndex='1' onChange={handleCityChange}>
                        <option value="default">Choose a city...</option>
                        {cityQuery.map((cityName)=>{
                            return <option key={cityName.id} value={cityName.city}>{cityName.city}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='buttons'>
                <button className='clear-button' type="button" onClick={handleClear}>Clear</button>
                <button className='submit-button' type="button" onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
};

export default Searchbar;