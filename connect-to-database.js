const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')
app.use(morgan('short'));




connection.connect(function (err) {
    if (err) {
        console.log("error here")
        throw err

    };
    connection.query("SELECT * FROM alchemy_recipes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log("asdasdf")
    });

    connection.end()
});