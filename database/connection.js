const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    port:'3307',
    user:'root',
    password:'admin',
    database:'disc-catalogs'
})

module.exports = conection