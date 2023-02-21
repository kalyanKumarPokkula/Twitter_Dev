import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import  {connect}  from './config/database.js';
import { PORT } from './config/server-config.js';
import TweetService from './services/tweet-service.js';
import router from './routes/index.js';

const logger = morgan('combined');

const serverSetup = async () => {

    const app = express();

    app.use(logger);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api' , router);

    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected");
        
    })
}

serverSetup();