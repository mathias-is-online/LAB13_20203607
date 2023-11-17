const express = require('express');
const mysql = require('mysql2');

const app = express();

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bicicentro'
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Conexión exitosa a base de datos");
});


//parte a)
app.get("/trabajadores", function (req, res) {
    conn.query("SELECT * FROM bicicentro.trabajadores", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});



//parte b)
app.get("/trabajadores/:id", function (req,res) {

    let trabajador_dni = req.params.id;

    let sql = "SELECT * FROM bicicentro.trabajadores where dni = ?";

    let params = [trabajador_dni]

    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});



//parte c)
app.get("/trabajadores/ventas/:id", function (req,res) {

    let trabajador_dni = req.params.id;

    let sql = "SELECT * FROM bicicentro.ventas where dniTrabajador = ?";

    let params = [trabajador_dni]

    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});



//parte d)
app.get("/sedes", function (req, res) {
    conn.query("SELECT * FROM bicicentro.sedes", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});


//parte e)
app.get("/sedes/:id", function (req,res) {

    let sedeid = req.params.id;

    let sql = "SELECT * FROM bicicentro.sedes where idsede = ?";

    let params = [sedeid]

    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});




//parte f)
app.get("/sedes/trabajadores/:id", function (req,res) {

    let sedeid = req.params.id;

    let sql = "SELECT * FROM bicicentro.trabajadores where idsede = ?";

    let params = [sedeid]

    conn.query(sql,params, function (err,results){
        if (err) throw err;
        res.json(results);
    });
});




app.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000');
});
