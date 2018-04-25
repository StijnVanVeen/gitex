const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({'msg' : 'hello you all'})
});

app.get('/bye', (req, res) => {
    res.json({'msg' : 'bye!'})
});

const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log('server is ready!')
});