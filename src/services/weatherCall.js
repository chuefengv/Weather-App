import axios from 'axios';

function weatherAPI(){
    const API_KEY='d927a6b3c39a782e1a9e488ba5fd8e5a';

    return axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&units=f&query=miami`);    
}

export { weatherAPI };