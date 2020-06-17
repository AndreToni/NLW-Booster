import express from 'express';//biblioteca tem que vir com definição de tipo 
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());//Para o express conseguir entender o corpo da nossa requisição em Json

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);


