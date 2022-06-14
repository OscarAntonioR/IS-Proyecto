import express from 'express';
import dotenv from 'dotenv';
import './config/db.js';
import ProdRouter from './routers/prod.routers.js';
import ClientRouter from './routers/cliente.routers.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

dotenv.config();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', ProdRouter);
app.use('/cliente', ClientRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	console.log(`----------------------------------------------`);
	console.log(`Server started on http://localhost:${PORT} ✨`);
	console.log(`----------------------------------------------`);
});
server.on('error', (err) => console.log(err));
