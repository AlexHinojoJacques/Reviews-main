const faker = require('@faker-js/faker');
class Usuario {
  constructor() {
    this.user = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.user.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  find(limit) {
    return this.user.slice(0, limit);
  }
  findOne(id) {
    return this.user.find((item) => item.id === id);
  }
  //FAKER
  create(data) {
    const newProduct = {
      id: faker.random.uuid(),
      ...data,
    };
    this.user.push(newProduct);
    return newProduct;
  }
  async update(id, changes) {
    const index = this.user.findIndex((item) => item.id === id);
    var currentProduct = this.user[index];
    this.user[index] = {
      ...currentProduct,
      ...changes,
    };
    return this.user[index];
  }

  async delete(id) {
    const index = this.user.findIndex((item) => item.id == id);
    this.user.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.export = Usuario;