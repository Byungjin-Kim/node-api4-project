require('dotenv').config();

const express = require('express');
const cors = require('cors')
const server = express();


server.use(express.json());
server.use(cors());

server.get('/hello', (req, res) => {
    res.json('hello, world');
});

server.use('*', (req, res) => {
    res.json({ message: 'API is UP!' });
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
