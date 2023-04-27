import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(car: IMotorcycle) {
    super(car.id, car.model, car.year, car.color, car.buyValue, car.status);
    this.category = car.category;
    this.engineCapacity = car.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;