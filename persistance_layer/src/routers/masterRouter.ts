import { Router } from 'express';
import ThemeARouter from './router';

class MasterRouter {
  private _router = Router();
  private _subrouterA = ThemeARouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/themeA', this._subrouterA);
  }
}

export = new MasterRouter().router;