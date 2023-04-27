import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorRoutes = Router();

MotorRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

MotorRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

MotorRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

MotorRoutes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updatedMotor(),
);

MotorRoutes.delete(
  '/cars/:id',
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default MotorRoutes;