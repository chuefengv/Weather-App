import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Searchbar.css';

function Searchbar({setState, setFlag, setLastState, state, lastState}){

    const [cities, setCities] = useState([]);
    const [currState, setCurrState] = useState("");

    handleChange = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        setState(e.target.value);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        setLastState(state)
        setFlag(true);
    }

    useEffect(()=>{
        setCurrState(lastState);
        Axios.get("http://localhost:3000/api/data", {params: {state:state}})
        .then((response)=>{
            setCities(response.data);
            console.log('test');
            console.log(cities);
        })
    },[state]);

    return(
        <div className='searchbar'>
            <div className="state-search">
                Search
                <br></br>
                <select defaultValue="default" onChange={handleChange}>
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
                <button type="button" onClick={handleSubmit}>Search</button>
            </div>
            <div className='city-search'>
                Advanced Search
                <br></br>
                <select defaultValue="default" onChange={handleChange}>
                    <option value="default">Choose a new city...</option>
                    {cities.map((cityName)=>{
                        return <option value={cityName.city}>{cityName.city}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default Searchbar;