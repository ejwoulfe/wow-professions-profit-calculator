const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')
app.use(morgan('short'));



app.get("/", (request, response) => {
    console.log("Responding to root route");
    response.send("Hello from Root!")
})
app.get("/users", (request, response) => {
    const user1 = {
        firstName: "Ed",
        lastName: "Woulfe"
    }
    const user2 = {
        firstName: "James",
        lastName: "Test"
    }
    response.json({
        user1,
        user2
    })
})
// localhost:3003
app.listen(3003, () => {
    console.log("Server is up and listening on 3003..")
});