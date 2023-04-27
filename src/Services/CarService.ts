import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarODM';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (!car) {
      return null;
    }
    return new Car(car);
  }
  public async createCar(car: ICar) {
    const carODM = new CarsODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarsODM();
    const cars = await carODM.getAllCars();
    const myCars = cars.map((e) => this.createCarDomain(e));
    return myCars;
  }

  public async getById(id: string) {
    const carODM = new CarsODM();
    const car = await carODM.getById(id);
    if (!car) throw Error('Car not found');
    return this.createCarDomain(car);
  }

  public async updatedCar(id: string, car: ICar) {
    const carODM = new CarsODM();
    const carUpdated = await carODM.updatedCar(id, car);
    return this.createCarDomain(carUpdated);
  }

  public async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();
    await motorcycleODM.delete(id);
  } 
}