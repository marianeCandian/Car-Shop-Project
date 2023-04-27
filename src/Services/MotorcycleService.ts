import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    } 
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const allMotorcycles = await motorcycleODM.find();
    const motorcycleArray = allMotorcycles.map((motorcycle) => this.createMotorDomain(motorcycle));
    return motorcycleArray;
  }

  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    return this.createMotorDomain(motorcycle);
  }

  public async updated(id: string, car: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedmotorcycle = await motorcycleODM.update(id, car);
    return this.createMotorDomain(updatedmotorcycle);
  }

  public async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();
    await motorcycleODM.delete(id);
  } 
}
