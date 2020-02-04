class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

class Factory {
  constructor (company) {
    this.company = company;
    this.cars = [];
  }
  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index];
  }
}

const tesla = new Factory ('Tesla')

tesla.generateCar();
console.log(tesla);
tesla.generateCar();
console.log(tesla);
tesla.generateCar();
console.log(tesla);

const bernierMotors = new Factory ('Bernier Motors')

bernierMotors.generateCar();
console.log(bernierMotors);

console.log(tesla.findCar(1));
