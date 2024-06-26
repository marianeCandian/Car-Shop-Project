import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car.id, car.model, car.year, car.color, car.buyValue, car.status);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(doors: number) {
    this.doorsQty = doors;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }

  public setSeatsQty(seats: number) {
    this.seatsQty = seats;
  }
}

export default Car;