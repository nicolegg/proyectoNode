//IMPORTAR PAQUETES
const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
//const faker = require('faker');
const ProductsService = require('./../services/product.service');


const router = express.Router();
const service = new ProductsService();



/* app.get('/products', (req, res) => {
  res.json([
    {
    name: 'producto 1',
    price: 1000
    },
    {
      name: 'producto 2',
      price: 2000
    }
  ]);
}); */

//LISTAR TODO
router.get('/', async(req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req,res) => {
  res.send('Yo soy un filter');
});

//Obtener Productos con ID
router.get('/:id', async (req,res) =>{
  const {id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});


//METODO POST -CREATE
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//METODO PATCH - UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

//METODO DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

//EXPORTAR EL MODULO
module.exports = router;
