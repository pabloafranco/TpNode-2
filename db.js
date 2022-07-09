var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto22008'
})

connection.connect( function(err){
    if (err) throw err
    console.log('Base conectada')
});


// Consuilta (seleccionar campo de la tabla y el callback)
// connection.query('select  1 + 1 as solution',)

module.exports = connection;