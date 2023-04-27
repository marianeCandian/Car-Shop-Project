import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotor = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allMotor = await this.service.getAllMotorcycles();
      return this.res.status(200).json(allMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const motorId = await this.service.getMotorcycleById(id);
      if (motorId === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorId);
    } catch (error) {
      this.next(error);
    }
  }

  public async updatedMotor() {
    const motor: IMotorcycle = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      const motorId = await this.service.getMotorcycleById(id);
      if (motorId === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      const motorUpdated = await this.service.updated(id, motor);
      return this.res.status(200).json(motorUpdated);
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

export default MotorcycleController;