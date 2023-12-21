import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './settings/db.js'
import 'dotenv/config';
import router from './network/routes.js';

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log(`servicios arriba en puerto : ${app.get('port')}`);
});