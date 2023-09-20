import bodyParser from "body-parser";
import express, { request, response } from 'express';

const cors = require('cors')
const app = express();

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

export default app;