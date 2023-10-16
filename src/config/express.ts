import bodyParser from "body-parser";
import express, { request, response } from 'express';
import { usertRouter } from "../modules/user/adapters/user.controller";
import path from "path";

const cors = require('cors')
const app = express();

app.use( express.static( path.join(__dirname,'../public')) );

app.use(
    cors({
        origin : '*',
    })
);

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.json({limit : '20mb'}));

app.get('/', (request, response) => {
    response.send('server running');
});

//routes
app.use('/api/userts', usertRouter);

export default app;