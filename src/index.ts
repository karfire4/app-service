import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as callbackMongoose from 'mongoose';
import dbConfig from './config/dbConfig';
import Router from './app/routes/Router';
import LoginController from './app/controllers/LoginController';

const app = express();

app.use(bodyParser.json())

// app.use('/app-service/api/v1',LoginController);

Router.listenMethods(app);

const mongoose = callbackMongoose   ;
mongoose.Promise = global.Promise;

console.log(dbConfig.url);
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});