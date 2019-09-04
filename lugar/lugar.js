const axios = require('axios');



const getLugarLatLong = async(direccion) => {


    const encodedUrl = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'd724c3ec70msh372cc31397e1c98p10317cjsnec627afff4fc' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const ciudad = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        ciudad,
        latitud,
        longitud
    };

};

module.exports = {
    getLugarLatLong
};