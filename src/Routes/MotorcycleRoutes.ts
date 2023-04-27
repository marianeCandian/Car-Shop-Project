import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const MotorRoutes = Router();

MotorRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

MotorRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).getById(),
);

MotorRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).getAll(),
);

MotorRoutes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).updatedMotor(),
);

export default MotorRoutes;