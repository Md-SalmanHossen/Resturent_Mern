import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet';
import ratelimiter from 'express-rate-limit'
import dotenv from 'dotenv';

import globalError from './src/middlewares/global_error.middleware.js';
import routeHandler from './src/middlewares/route_handler.middleware.js';

dotenv.config();

const app=express();


app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.use(helmet());
app.use(hpp());

const limiter=ratelimiter({
   windowMs:15*60*1000,
   max:100,
   message:'Too many requests, please try again later'
});
app.use(limiter);


app.use(routeHandler);
app.use(globalError);

const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
   console.log(`Server running on port ${PORT}`)
});