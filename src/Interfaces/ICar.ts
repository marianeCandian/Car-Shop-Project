export interface ICar {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: false | boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}