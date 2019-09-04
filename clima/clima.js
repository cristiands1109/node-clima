const axios = require('axios');



const getClima = async(latitud, longitud) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=c1626ff986629e2fedf4f244c1149f1b&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};