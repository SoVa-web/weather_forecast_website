import { NextFunction, Request, Response, Router } from 'express';
import Controller from '../conrollers/controller';

class Subrouter {
  private _router = Router();
  private _controller = Controller;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.getData());
    });
  }
}

export = new Subrouter().router;