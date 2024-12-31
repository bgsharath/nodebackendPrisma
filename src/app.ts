// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import cookieParser from 'cookie-parser';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/profile', userRouter); 

 
export default app;
