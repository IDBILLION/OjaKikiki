const express = require('express');
const server = express();
const port = 3000;


server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(3000, () => {
    console.log(`Example server listening on port ${port}`)
})