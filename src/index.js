const express = require('express');
const connect = require('./config/database');

const { PORT } = require('./config/server-config');


const serverSetup = async () => {

    const app = express();
    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected");

    })
}

serverSetup();