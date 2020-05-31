const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())



// localhost:3003
app.listen(3003, () => {
    console.log("Server is up and listening on 3003..")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin/admin-page.html')

})