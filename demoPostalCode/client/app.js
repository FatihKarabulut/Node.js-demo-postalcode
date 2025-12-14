import express from 'express';
import {run} from './endpoint.js'
import cors from 'cors';

let app = express();

app.use(cors());


await run(7272,app);

