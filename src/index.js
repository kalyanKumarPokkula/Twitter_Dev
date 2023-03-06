import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';

import  {connect}  from './config/database.js';
import { PORT } from './config/server-config.js';
import router from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js'


const logger = morgan('combined');

const serverSetup = async () => {

    const app = express();

    app.use(logger);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(passport.initialize());
    passportAuth(passport);

    
    app.use('/api' , router);

    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected"); 
    })
}

serverSetup();