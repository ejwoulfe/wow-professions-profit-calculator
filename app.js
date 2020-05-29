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
    con.query("SELECT * FROM alchemy_recipes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log("asdasdf")
    });
});



connection.end()
// // localhost:3003
// app.listen(3003, () => {
//     console.log("Server is up and listening on 3003..")
// });