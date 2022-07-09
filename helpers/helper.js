const axios = require('axios');
const hbs = require('hbs');

// Calculo del dolar
let conversionApesos;
let dolar;
let dolarTurista;
axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(function(respuesta){
        dolar = respuesta.data[0].casa.venta   //toma como string
        dolar = dolar.replace(/,/g, '.')
        dolar = parseFloat(dolar)
    })
    .then(function(){
        const impuestoPais = 0.30;
        const impuestoAFIP = 0.35;
        dolarTurista = dolar * impuestoPais + dolar * impuestoAFIP + dolar
        return dolarTurista;
    })
    .catch( function(error){
        console.log('Error en AXION', error)
    })

// Helper de conversion
// Agrego la funcion para usarlo despues en index.hbs
hbs.registerHelper('dolarApeso', function(dato){
    let precioFinal = dolarTurista * dato;

    return (new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(precioFinal))

})
