import { ICar } from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }

  public getYear() {
    return this.year;
  }

  public setYeat(year: number) {
    this.year = year;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
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