import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars() {
    try {
      const cars = await this.service.getAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarsById() {
    const { id } = this.req.params;
    try {
      const cars = await this.service.getById(id);
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async updatedCar() {
    const car: ICar = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      const carById = await this.service.getById(id);
      if (carById === null) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      const carUpdated = await this.service.updatedCar(id, car);
      return this.res.status(200).json(carUpdated);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    const { id } = this.req.params;
    try {
      await this.service.delete(id);
      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;