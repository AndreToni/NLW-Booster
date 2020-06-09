import express from 'express';//biblioteca tem que vir com definição de tipo 
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());//Para o express conseguir entender o corpo da nossa requisição em Json

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);


