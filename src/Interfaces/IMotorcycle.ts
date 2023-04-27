import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: 'Street' | 'Custim' | 'Trail';
  engineCapacity: number;
}