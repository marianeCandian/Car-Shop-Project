import { Schema, isValidObjectId, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

const INVALID_ERROR = 'Invalid mongo id';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_ERROR);
    return this.model.findById(id);
  }

  public async updatedCar(id: string, obj: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw Error(INVALID_ERROR);
    }
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }

  public async delete(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw Error(INVALID_ERROR);
    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default CarODM;