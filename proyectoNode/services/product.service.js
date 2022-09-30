const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
//------------------METODOS----------------------

  //CREAR
  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  //READALL
  async find(){
    return this.products;
  }

  //BUSCAR POR ID
  async findOne(id){
    return this.products.find(item => item.id === id);
  }

  //ACTUALIZAR
  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Producto no encontrado');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  //ELIMINAR
  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Producto no encontrado');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
