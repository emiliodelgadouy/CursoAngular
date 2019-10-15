import {Vehiculo} from './vehiculo';

export class Cliente {
  public id: number;
  public nombre: string;
  public razonSocial: string;
  public telefono: string;
  public rut: number;
  public domicilio: string;
  public vehiculos: Vehiculo[] = [];
}
