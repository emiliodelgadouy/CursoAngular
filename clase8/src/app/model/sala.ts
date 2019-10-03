import {Sector} from './sector';

export class Sala {
  public id: number;
  public nombre: string;
  public capacidad: number;
  public sectores: Sector[] = [];
}

