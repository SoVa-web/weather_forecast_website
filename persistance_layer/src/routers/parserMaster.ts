import { Router } from 'express';
import Subrouter from './router';

class ParserMaster {
  private _router = Router();
  private _subrouter = Subrouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use(`/weather`, this._subrouter);
  }
}

export = new ParserMaster().router;