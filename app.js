const lugar = require('./lugar/lugar'); // exportacion de lugar.js
const clima = require('./clima/clima'); // exportacion de lugar.js

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion); 
// lugar.getLugarLatLong(argv.direccion).then(console.log);

// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);


let getInfo = async(direccion) => {


    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

};

getInfo(argv.direccion).then(console.log).catch(console.log);