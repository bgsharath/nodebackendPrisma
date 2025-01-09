// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import cookieParser from 'cookie-parser';
import i18n from './config/i18nconfig';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(i18n.init);

app.use('/auth', authRouter);
app.use('/profile', userRouter); 

 
export default app;
