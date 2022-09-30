console.log('My App');

//IMPORTAR PAQUETES
const express = require('express');
//const faker = require('faker');
const routerApi = require('./routes/');


const app = express();
const port = 3000;

app.use(express.json());

//METODO GET
app.get('/', (req, res) => {
  res.send('Hola Nicole mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola Nicole soy nueva ruta');
});

//llamando las rutas
routerApi(app)

app.listen(port, () => {
  console.log('Mi port' + port);
});
