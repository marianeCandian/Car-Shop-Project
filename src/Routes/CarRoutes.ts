import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

CarRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getCarsById(),
);

CarRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getCars(),
);

CarRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updatedCar(),
);

CarRoutes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).delete(),
);

export default CarRoutes;
